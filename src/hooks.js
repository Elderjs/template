const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

const hooks = [
  // {
  //   hook: "html",
  //   name: "compressHtml",
  //   description: "Uses regex to compress html",
  //   priority: 100, // last please :D
  //   run: async ({ htmlString }) => {
  //     return {
  //       htmlString: htmlString
  //         .replace(/[ \t]/gi, " ")
  //         .replace(/[ \n]/gi, " ")
  //         .replace(/[ ]{2,}/gi, " ")
  //         .replace(/>\s+</gi, "><"),
  //     };
  //   },
  // },

  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description: 'Copies /src/assets/ to the assets folder defined in the elder.config.js',
    run: ({ settings }) => {
      // copy assets folder to public destination
      glob.sync(path.resolve(process.cwd(), settings.locations.srcFolder, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);

        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          fs.ensureDirSync(parsed.dir);
          const relDirToAssets = file.replace(parsed.dir, '.');
          fs.copyFileSync(file, path.resolve(process.cwd(), settings.locations.assets, relDirToAssets));
        }
      });
    },
  },
];
module.exports = hooks;
