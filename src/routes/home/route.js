module.exports = {
  all: () => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
};
