module.exports = {
  siteUrl: '',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {},
  server: {
    prefix: '',
  },
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncommenting this would disabled writing your files on build.
  },
  plugins: {
    'elderjs-plugin-markdown': {
      routes: ['blog'],
    },
    '@elderjs/browser-reload': {}, // this reloads your browser when nodemon restarts your server.
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
