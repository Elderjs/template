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
        const mdsInRoute = path.resolve(process.cwd(), settings.locations.srcFolder, './routes/', route);
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
      },
    },
  ],
};

module.exports = plugin;
exports.default = plugin;
