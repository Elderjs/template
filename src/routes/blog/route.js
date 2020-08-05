module.exports ={
  all: () => [], // these are populated by the elderjs-plugin-markdown
  permalink: ({ request }) => `/blog/${request.slug}/`,
};

