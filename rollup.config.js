require('dotenv').config();
const svelte = require('rollup-plugin-svelte');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const babel = require('rollup-plugin-babel');
const css = require('rollup-plugin-css-only');
const multiInput = require('rollup-plugin-multi-input').default;
const externalGlobals = require('rollup-plugin-external-globals');
const replace = require('@rollup/plugin-replace');
const sveltePreprocess = require('svelte-preprocess');
const json = require('@rollup/plugin-json');
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const del = require('del');

const { getElderConfig, partialHydration } = require('@elderjs/elderjs');

const { locations } = getElderConfig();
const { ssrComponents, clientComponents } = locations.svelte;

const production = process.env.NODE_ENV === 'production' || !process.env.ROLLUP_WATCH;
console.log(
  `rollup production === ${production}. ${!process.env.ROLLUP_WATCH ? 'Because watch is undefined' : ''}. ${
    process.env.NODE_ENV === 'production' ? 'Because NODE_ENV === Production' : ''
  }`,
);

let configs = [];

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [require('autoprefixer')],
  },
});

// clear out components so there are no conflicts due to hashing.
del.sync([`${ssrComponents}*`, `${clientComponents}*`]);

// TODO: this should happen on every change. Need to add to a single one of the configs.
// copy assets folder to public destination
glob.sync(path.resolve(process.cwd(), locations.srcFolder, './assets/**/*')).forEach((file) => {
  // Remove base folder structure and split to array
  const filePath = file.replace(process.cwd() + '/src/assets/', '').split('/');
  // Check if there is a file name in the last element
  const fileName = filePath[filePath.length - 1].indexOf('.') !== -1 ? filePath[filePath.length - 1] : false;

  // Create folder structure without filename
  fs.ensureDirSync(
    path.resolve(process.cwd(), locations.assets, fileName ? filePath.slice(0, -1).join('/') : filePath.join('/')),
  );

  // Only write the file if it has an extension
  if (fileName) fs.copyFileSync(file, path.resolve(process.cwd(), locations.assets, filePath.join('/')));
});

// Add ElderJs Peer deps to public if they exist.
const elderJsPeerDeps = [
  ['./node_modules/intersection-observer/intersection-observer.js', 'intersectionObserverPoly'],
  ['./node_modules/systemjs/dist/s.min.js', 'systemJs'],
]
  .filter((dep) => fs.existsSync(path.resolve(process.cwd(), dep[0])))
  .map((dep) => {
    return {
      input: dep[0],
      output: [
        {
          file: path.resolve(process.cwd(), `${locations.public}${locations[dep[1]]}`),
          format: 'iife',
          name: dep[1],
          plugins: [terser()],
        },
      ],
    };
  });

configs = [...configs, ...elderJsPeerDeps];

// SSR /routes/ Svelte files.
const templates = glob.sync('./src/routes/*/*.svelte').reduce((out, cv) => {
  const file = cv.replace(`${__dirname}/`, '');
  out.push(
    createSSRConfig({
      input: file,
      output: {
        dir: ssrComponents,
        format: 'cjs',
        exports: 'auto',
      },
    }),
  );
  return out;
}, []);

// SSR /layouts/ Svelte files.
const layouts = glob.sync('./src/layouts/*.svelte').reduce((out, cv) => {
  const file = cv.replace(`${__dirname}/`, '');
  out.push(
    createSSRConfig({
      input: file,
      output: {
        dir: ssrComponents,
        format: 'cjs',
        exports: 'auto',
      },
    }),
  );

  return out;
}, []);

if (production) {
  // production build does bundle splitting, minification, and babel
  configs = [
    ...configs,
    ...templates,
    ...layouts,
    createBrowserConfig({
      input: ['src/components/*/*.svelte'],
      output: {
        dir: clientComponents,
        entryFileNames: 'entry[name]-[hash].js',
        sourcemap: !production,
        format: 'system',
      },
      multiInputConfig: multiInput({
        relative: 'src/components/',
        transformOutputPath: (output, input) => `${path.basename(output)}`,
      }),
    }),
    createSSRConfig({
      input: ['src/components/*/*.svelte'],
      output: {
        dir: ssrComponents,
        format: 'cjs',
        exports: 'auto',
      },
      multiInputConfig: multiInput({
        relative: 'src/components/',
        transformOutputPath: (output, input) => `${path.basename(output)}`,
      }),
    }),
  ];
} else {
  // watch/dev build bundles each component individually for faster reload times during dev.
  const sharedComponents = glob.sync(path.resolve(__dirname, './src/components/*/*.svelte')).reduce((out, cv) => {
    const file = cv.replace(`${__dirname}/`, '');
    // console.log(file, cv);;
    out.push(
      createBrowserConfig({
        input: file,
        output: {
          dir: clientComponents,
          entryFileNames: 'entry[name].js',
          sourcemap: !production,
          format: 'system',
        },
      }),
    );
    out.push(
      createSSRConfig({
        input: file,
        output: {
          dir: ssrComponents,
          format: 'cjs',
          exports: 'auto',
        },
      }),
    );

    return out;
  }, []);
  configs = [...configs, ...templates, ...layouts, ...sharedComponents];
}

function createBrowserConfig({ input, output, multiInputConfig }) {
  const config = {
    cache: true,
    treeshake: true,
    input,
    output,
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      json(),
      svelte({
        dev: !production,
        immutable: true,
        hydratable: true,
        css: false,
        preprocess,
        // emitCss: true,
      }),
      externalGlobals({
        systemjs: 'System',
      }),
      nodeResolve({
        browser: true,
        dedupe: ['svelte'],
        preferBuiltins: true,
      }),
      commonjs(),
    ],
  };
  // bundle splitting.
  if (multiInputConfig) {
    config.plugins.unshift(multiInputConfig);
  }
  // if is production let's babelify everything and minify it.
  if (production) {
    config.plugins.push(
      babel({
        extensions: ['.js', '.mjs', '.cjs', '.html', '.svelte'],
        include: ['node_modules/**', 'src/**'],
        exclude: ['node_modules/@babel/**'],
        runtimeHelpers: true,
      }),
    );
    config.plugins.push(terser());
  }
  return config;
}

function createSSRConfig({ input, output, multiInputConfig = false }) {
  const config = {
    cache: true,
    treeshake: true,
    input,
    output,
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      json(),
      svelte({
        dev: !production,
        hydratable: true,
        generate: 'ssr',
        css: true,
        extensions: '.svelte',
        preprocess: [preprocess, partialHydration],
      }),

      nodeResolve({
        browser: false,
        dedupe: ['svelte'],
      }),
      commonjs({ sourceMap: false }),
      css({
        ignore: true,
      }),
      production && terser(),
    ],
  };
  // if we are bundle splitting include them.
  if (multiInputConfig) {
    config.plugins.unshift(multiInputConfig);
  }

  return config;
}

module.exports = configs;
