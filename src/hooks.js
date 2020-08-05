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
];
module.exports = hooks;
