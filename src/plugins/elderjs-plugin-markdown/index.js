const glob = require('glob');
const path = require('path');
const fs = require('fs');
const grayMatter = require('gray-matter');
const remark = require('remark');
const remarkHtml = require('remark-html');

async function parseMarkdown(markdown) {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

/**
 * This is a very quickly written markdown plugin. An official plugin will be coming soon.
 * 1. This plugin parses all of the markdown files, generates slugs for them, and adds the parsed
 *    markdown to the data object using the 'bootstrap' hook.
 * 2. Later it takes each encountered markdown file and adds a new 'request' object on the `allRequests` hook.
 *    This is why 'all' in the /routes/blog/route.js returns an empty array. It is populated by the plugin.
 * 3. Instead of adding frontmatter on the 'data' function in the /routes/blog/route.js the plugin is adding
 *    frontmatter data to the 'data' object here.
 *
 *
 * This plugin is intended to be illustrative of how hooks can be used to accomplish most things that you'd see in a route.js
 * and how this functionality could be shared across routes or the entire site.
 *
 *
 */

const plugin = {
  name: 'elderjs-plugin-markdown',
  description:
    'Reads and collects markdown content from specified routes. It automatically adds found markdown files as requests on allRequests',
  init: (plugin) => {
    const { config, settings } = plugin;

    // used to store the data in the plugin's closure so it is persisted between loads
    plugin.markdown = [];
    plugin.requests = [];

    if (config && Array.isArray(config.routes) && config.routes.length > 0) {
      for (const route of config.routes) {
        const mdsInRoute = path.resolve(settings.srcDir, './routes/', route);
        // console.log(`${mdsInRoute}/*.md`);
        const mdFiles = glob.sync(`${mdsInRoute}/*.md`);

        for (const file of mdFiles) {
          const md = fs.readFileSync(file, 'utf-8');
          const { data, content } = grayMatter(md);

          let fileSlug = file.replace('.md', '').split('/').pop();

          if (fileSlug.includes(' ')) {
            fileSlug = fileSlug.replace(/ /gim, '-');
          }

          if (data.slug) {
            plugin.markdown.push({
              slug: data.slug,
              data,
              content,
            });
            plugin.requests.push({ slug: data.slug, route });
          } else {
            plugin.markdown.push({
              slug: fileSlug,
              data,
              content,
            });
            plugin.requests.push({ slug: fileSlug, route });
          }
        }
      }
    }
    return plugin;
  },
  config: {},
  shortcodes: [
    {
      shortcode: 'box',
      run: async ({ content, props, plugin }) => {
        return {
          html: `<div class="box ${props.class}">${content}</div>`, // this is what the shortcode is replaced with.
          css: '.test{}',
          js: '<script>var test = true;</script>',
          head: '<meta test="true"/>',
        };
      },
    },
  ],

  hooks: [
    {
      hook: 'bootstrap',
      name: 'addMdFilesToDataObject',
      description: 'Add parsed .md content and data to the data object',
      priority: 50, // default
      run: async ({ data, plugin }) => {
        return {
          data: { ...data, markdown: plugin.markdown },
        };

        // Learning Note:
        // the bootstrap hook is run before each of the 'all' /routes/[routeName]/route.js are run.
        // Open the /routes/home/route.js, replace the 'all' function with this one and restart the server:
        // all: ({ data }) => {
        //   console.log(data);
        //   return [{ slug: '/' }];
        // },
        // You should see all of your parsed markdown files now live on the data object.
      },
    },
    {
      hook: 'allRequests',
      name: 'mdFilesToAllRequests',
      description: 'Add collected md files to allRequests array.',
      priority: 50, // default
      run: async ({ allRequests, plugin }) => {
        return {
          allRequests: [...allRequests, ...plugin.requests],
        };

        // Learning Note:
        // If you look at the /routes/blog/route.js you'll see that it is returning an empty 'all' array.
        // The reason for this is that this plugin is adding all of the collected markdown 'request' objects to the 'allRequests'
        // array here.

        // In the init() function above, look for 'plugin.requests.push' and you'll see these 'request' objects being collected.
      },
    },
    {
      hook: 'data',
      name: 'addFrontmatterAndHtmlToDataForRequest',
      description: 'Adds parsed frontmatter and html to the data object for the specific request.',
      priority: 50,
      run: async ({ request, data }) => {
        if (data.markdown) {
          const markdown = data.markdown.find((m) => m.slug === request.slug);
          if (markdown) {
            const { content, data: frontmatter } = markdown;
            const html = await parseMarkdown(content);
            return {
              data: {
                ...data,
                frontmatter,
                html,
              },
            };
          }
        }

        // Learning Note:
        // This function is adding frontmatter and route specific HTML to the 'data' object for a request.
        // This means when you visit '/getting-started/', the object received within the 'Blog.svelte' file under 'export let data;' will
        // have the HTML, frontmatter, and any other data passed in.
        // Navigate over to Blog.svelte and check it out.
      },
    },
  ],
};

module.exports = plugin;
exports.default = plugin;
