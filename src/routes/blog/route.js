module.exports = {
  all: () => [], // these are populated by the elderjs-plugin-markdown
  permalink: ({ request }) => `/${request.slug}/`,
};
