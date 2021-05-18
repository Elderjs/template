module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'simple' }],
  // the permalink definition takes a 'request' object and returns a relative permalink.
  // In this case "/simple/"
  permalink: '/:slug/', // this is the same as ({ request }) => `/${request.slug}/`;
  data: async ({ request }) => {
    // The data function populates an object that will be in available in our Svelte template under the 'data' key.
    return {
      title: 'Elder.js Route: An Overview',
      steps: [
        `Step 1: All routes require a <span class="code">route.js</span> and a svelte template. Look at <span class="code">./src/routes/simple/route.js</span> to follow along.`,
        `Step 2: We define an <span class="code">all()</span> function that returns an array of <span class="code">request</span> objects.`,
        `Step 3: We define a <span class="code">permalink</span> string or function that transforms the <span class="code">request</span> objects from <span class="code">all()</span> into permalinks.`,
        `Step 4: We define a data function that makes data available in your svelte template.`,
      ],
      content: `
      <h2>Elder.js' all() Function</h2>
      <p>Elder.js is a bit different from most frameworks in that for pages to be statically generated it asks you to define all of your <span class="code">request</span> objects in your <span class="code">all()</span> function. While this step may seem a bit different from what you are used to it prevents Elder.js from having to crawl your site to render it which dramatically speeds up the build process.</p>
  
      <h2>Elder.js' Permalink Strategy</h2>
      <p>Elder.js' routing uses the common placeholder strategy that looks like: <span class="code">/blog/:slug/</span>.</p>
      <p>For most projects the placeholder strategy works well enough, but If you need more control you can also use a function such as <span class="code">({ request }) => \`/${request.slug}/\`;</span></p>

      <h2>Elder.js' Data Function </h2>
      <p>The <span class="code">data</span> function is where your "business logic" should live. This is where you prepare all of the data needed for your page to be rendered. This data is passed directly to the route's Svelte template.</p>

      <h2>Dynamic Routes in Elder.js</h2>
      <p>If you are looking to use Elder.js as a server (SSR) instead of a static site generator you can set <span class="code">dynamic: true</span> in your route definition and any parameters extracted from your route definition will be available on the <span class="code">request</span>  object. Please note that dynamic routing requires using a <span class="code">/:placeholder/</span> permalink strategy.  </p>

      <h2>Learning Exercise: </h3>
      <p>Try adding <span class="code">{ slug: "another-request" }</span> to the <span class="code">all()</span> function in <span class="code">./src/simple/route.js</span> 
      and then visit /another-request/ to see that you added another page with the same data.</p>
      
      `,
    };
  },

  // template: 'Simple.svelte' // this is auto-detected.
  // layout: 'Layout.svelte' // this is auto-detected.
};
