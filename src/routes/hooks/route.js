const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  all: async () => {
    // This example uses Elder.js source code to show how to dynamically create slugs for a route.
    // There's no special relation to hookInterface. The hookInterface is just a plain array of JS objects and
    // hook.hook represents their name in this usecase.
    // The hook interface is the "contract" that Elder.js enforces to execute functions on various hooks.
    // You can view the source code here: https://github.com/Elderjs/elderjs/blob/master/src/hookInterface/hookInterface.ts
    const requestObjects = hookInterface.map((hook) => ({
      slug: hook.hook,
    }));
    return requestObjects;
  },
  permalink: ({ request }) => `/${request.slug}/`,
  data: ({ request }) => {
    // Data takes the 'request' objects returned from the 'all' function and looks up the hookDetails from the hookInterface.
    const { slug } = request;
    const hook = hookInterface.find((hookDetails) => hookDetails.hook === slug);

    // This object returned will be available in the `Hooks.svelte` template by using "export let data;"
    return { hook, hookEntityDefinitions };
  },
};
