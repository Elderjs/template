# Elder.js Template Project

<img src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Node&query=engines.node&url=https%3A%2F%2Fraw.githubusercontent.com%2Felderjs%2Ftemplate%2Fmaster%2Fpackage.json" alt="node version" />

This is a project template for [Elder.js](https://elderguide.com/tech/elderjs/) apps. The template lives at https://github.com/elderjs/template and the Elder.js source is here: https://github.com/elderjs/elderjs

Here is a demo of the template: [https://elderjs.netlify.app/](https://elderjs.netlify.app/)

## Get started

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit Elderjs/template elderjs-app
cd elderjs-app
```

### Install the dependencies:

```bash
npm install # or just yarn
```

### Start Project:

```bash
npm start
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running.

### Development:

For development, we run two separate tasks using [`concurrently`](https://www.npmjs.com/package/concurrently). One for the server and the other for rollup
which will rebuild your svelte components on change.

```bash
npm run dev # This executes `npm run dev:rollup` && `npm run dev:server`
```

Once you have this running, edit a component file in `src`, save it, and reload the page to see your changes.

### To Build HTML:

```bash
npm run build
```

This will build all of your html into the /public/ folder.

### What to Expect

- Nodemon is watching your files for changes. It will restart when it needs to.
- Rollup is watching your files for changes. It will restart when it needs to.
- If your `elder.config.js` has `@elderjs/plugin-browser-reload': {}` in it's plugins, your browser will automatically restart after the server restarts.
