---
title: 'Is Elder.js Right For You?'
excerpt: 'What types of sites can you build with Elder.js? Can I use it for ______? What parts of the project do most people struggle with?'
author: Nick Reese
# slug: common-uses-for-elderjs
---

If you're wondering if Elder.js will support your use case we have 1 good rule to help you make that decision:

> Are you building a "**website**" which has mainly static, public content or are you building an "**app**" where users log in to do stuff and content is personalized?

If you're building a **website**, then Elder.js is a great solution out of the box.

If you're building an "App" you can definitely use Elder.js with hooks (make sure to look at the <a href="/middleware/">`middleware`</a> hook) but you may also want to explore <a href="https://sapper.svelte.dev/">Sapper</a> as there are lots of guides on authentication and other common needs for Apps.

## Common Use Cases for Elder.js

The Elder.js project was born out of the system that powers <a href="https://elderguide.com/">ElderGuide.com</a>. When building Elder Guide we searched high and low for a blazing fast static site generator that we could use with Svelte, but couldn't find anything that fit our needs.

After 6 months of building a great system, we decided to polish it a bit more and open it up into a project others could use.

Today, Elder.js has two main functions: one as a static site generator and the other as `express` middleware where it acts as a Svelte framework that supports server side rendering (SSR) and partial hydration. (You're probably viewing this page on the `express` middleware version.)

All of this said, we highly recommend Elder.js as a tool for building statically generated sites that can be cheaply and securely hosted on S3, Netlify, or Cloudflare.

These include:

- Flagship SEO websites with 10,000s of pages
- Blogs and personal websites
- Portfolio or brochure websites

To see static export in action run `npm run build` in your terminal. We think you'll be surprised how fast it builds. :)

If you are looking to use Elder.js as an `express` middleware make sure to look at the <a href="/middlewareRequest/">`middlewareRequest`</a> hook as it should empower you to do anything you'd need to do with Express.

## What Parts of Elder.js Aren't Great?

**A Very Complex Rollup Config**

To be candid, Elder.js's biggest drawback is it's very complex Rollup configuration. Hours and hours of tinkering have gone into it and it's the best system we could come up with that works.

As of Elder.js v1.0.0 this config was internalized to Elder.js to help internalize much of the complexity.

That said, this means that if you need a different rollup config than the standard, you'll need to do some hacking yourself.

**A Very Strict Folder Structure**

Because of Elder.js' complex rollup config it needs to follow a pretty specific file structure. This project matches that file structure and you can learn more about it on the <a href="/getting-started/">getting started</a> page.

**Express Middleware / Server**

In the interest of being objective, it is worth noting that the 'server' functionality powered by Express like middleware was initially used as a 'previewer' to allow us to see pages of our statically generated site BEFORE waiting for 1,000s of pages to build.

Only later did we realize that others would be interested in the same functionality to build server rendered Svelte apps.

**No Live Reload / HMR support (Yet)**

We realize developer experience is crucial and see potential in using <a href="https://www.snowpack.dev/">Snowpack</a> to avoid bundling altogether during development, but we don't want to migrate to JavaScript's native ES Module (ESM) syntax on production just yet.
