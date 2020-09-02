---
title: 'Getting Started with Elder.js'
excerpt: 'You have the starter template of Elder.js running. So what is next? This guide will help you explore the project.'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author: Nick Reese
---

Sweet! So you've got the Elder.js starter template up and running. What's next?

Let's take a look:

## 3 Routes To Explore

This project is structured to follow the required Elder.js folder structure which you can see below, but in short you've got 3 routes in the `./src/routes/` folder. They are "hooks", "home", and "blog."

Each of these 3 routes are designed to showcase something different.

- Home - This is the simple route to illustrate the basic concepts. Open up the `./src/routes/home/route.js` file and look at how the `all` and `permalink` functions work. Then look at the `Home.svelte` to see what is going on there.
- Blog - This route is powered almost exclusively by a plugin which you can find in `./src/plugins/elderjs-plugin/markdown/`. You can find this page's markdown at `./src/routes/blog/getting-started.md`. Try duplicating one of the existing markdown files and renaming it. You'll see that the homepage will change next time you build or reload the server.
- Hooks - The hooks route illustrates how to add data to a page and the data flow. In the `./src/routes/hooks/route.js` file you'll see we're importing the hookInterface and then building a page for each hook using the `all` and `permalink` functions. Next open up the `./src/routes/hooks/data.js` and the `./src/routes/hooks/Hooks.svelte` to see how data is passed from request --> data --> Svelte.

## Writing Your First Hook:

Once you've explored the templates above, it is worth looking a bit at how the hooks work.

Open up the `./src/hooks.ts` file and look at the hooks this project uses.

You'll see there is just one hook that is commented out.

If you uncomment that hook, and reload this page, you'll see that the html is now compressed... but the code blocks are broken. (they always say don't compress html with regex!).

In plain english, this hook takes the `htmlString`, modifies it (compresses it), and returns it.

Now that you see the power of hooks, let's have you add your first hook which illustrates how you'd add analytics code to every page of your site.

Copy and paste the hook below into your `hooks.ts` file.

```javascript
  {
    hook: 'stacks',
    name: 'addAnalyticstoFooter',
    description: 'Add analytics to Footer.',
    priority: 100, // we want it to be last
    run: async ({ footerStack }) => {
      footerStack.push({
        source: 'hooks',
        string: `<!-- your analytics code here -->`,
        priority: 100,
      });
      return { footerStack }
    },
  },
```

If you reload your html, you should see the html comment from the hook.

In this hook we are manipulating a "stack."

Under the hood, Elder.js uses stacks to predictably manage in what order strings are rendered.

In this hook we're just adding our analytics code at a priority of 100 (last).

If stacks seem foreign, just remember they are a list of strings with some meta data.

## Hooks In Depth:

Elder.js runs it's hooks system based on it's 'hookInterface'. This interface defines which hooks can do what and what properties they have.

In building Elder.js we found that if anything can be mutated at anytime, a system quickly gets hard to reason about.

The 'hookInterface' is designed to solve that problem. While you can explore all of the hooks on the homepage, before you go try adding a malicious hook that is designed to corrupt important data during page load.

Add the hook below to your `hooks.ts` file and reload this page:

```javascript
{
 hook: 'data',
 name: 'maliciousHook',
 description: 'Can we break anything?',
 priority: 2, // this runs just after Elder.js's functions run.
 run: async ({ helpers, data, settings, request, query }) => {
   settings = null;
   request = null;
   helpers = null;
   query = null;

   return { settings, request, query, helpers }
 },
},
```

On reload, if you check the console you'll see that this hook wasn't able to mutate any of the props due to the way the hookInterface is configured.

Essentially only properties that are able to be mutated on a hook, will be mutated on the hook. This helps keep plugins and developers honest and makes maintaining the project in the future easier to reason about. :)

If you're interested in exploring hooks more check out the full <a href="https://elderguide.com/tech/elderjs/">Elder.js documentation on ElderGuide</a>.

## Elder.js Project Structure

Under the hood Elder.js does quite a bit of magic based on the file structure below but more importantly the `rollup.config.js` is setup to match this file structure. Since rollup handles all of the bundling of our Svelte components, we recommend you follow this structure unless you like tinkering with bundlers.

```
Project Root
| elder.config.js
| package.json
| tsconfig.json (typescript only)
| rollup.config.js
| ... (other common stuff, .gitignore, svelte.config.js... etc)
| -- src
| -- | -- build.js
| -- | -- server.js
| -- helpers
| -- | -- index.js
| -- | -- ...
| -- assets
| -- | -- items to be copied to public at build.
| -- layouts
| -- | -- Layout.svelte
| -- routes
| -- | -- [route] ('blog' in this example)
| -- | -- | -- Blog.svelte
| -- | -- | -- route.js
| -- plugins
| -- | -- [plugin] ('elderjs-plugin-markdown' for example)
| -- | -- | -- index.js
| -- components
| -- | -- [component] ('Contact' in this example)
| -- | -- | -- Contact.svelte


Typescript Projects:
| -- build
| -- | ... copy of your compiled ts from the src folder here.
```
