/**
 * Shortcodes are a useful way of making content that lives in a CMS or in markdown files dynamic.
 *
 * By default, Elder.js ships with a {{svelteComponent name="" props="" options="" /}} shortcode.
 * Try adding a clock to one of your markdown files with `{{svelteComponent name="Clock" options='{"preload":true}' props='{"foo": true}' /}}`
 *
 *
 */

module.exports = [
  {
    /**
     * This is a simple shortcode that will wrap content with a magical box.
     * Try adding `{{box class="yellow"}}Your content here{{/box}}` in one of your markdown files.
     * */
    shortcode: 'box',
    run: async ({ content, props }) => {
      return {
        // this is what the shortcode is replaced with. You CAN return an empty string.
        html: `<div class="box ${props.class}">${content}</div>`,

        // This is added to the page's css through the cssStack. You probably want an external css file for most usecases.
        css: '.box{border:1px solid red; padding: 1rem; margin: 1rem 0;} .box.yellow {background: lightyellow;}',

        // Javascript that is added to the footer via the customJsStack.
        js: '<script>var test = true;</script>',

        // Arbitrary HTML that is added to the head via the headStack
        head: '<meta test="true"/>',
      };
    },
  },

  /**
   *
   * Usecases for shortcodes:
   *
   * If you're new to shortcodes you may be thinking: When would I use these?
   *
   * Shortcodes are best used when:
   *
   * 1. You need a placeholder for dynamic content that isn't available when the static content is written.
   * 2. You want a future proof way of adding 'design flare' to your site.
   * 3. When you need a dynamic data point that changes often and don't want to go back and update it each time it changes.
   *
   * One of the best examples is the following scenario:
   * * Imagine you have your content in a CMS such as WordPress, Contentful, Prismic, or even a markdown file.
   * * Within this content you need to know the number of pages on your site... but it changes all of the time.
   *
   * Usually pulling this off would require you to put a placeholder like {{numberOfPages /}} and then preprocessing the content before rendering it.
   *
   * With Elder.js shortcodes, all the preprocessing is done for you, you just need to decide what you want to replace it with.
   *
   * Below is code for the usecase above.
   *
   * But it is important to note, even if you wanted {{latestInstagramPhoto /}} to be shown, the same approach would apply. Just use something like
   * `node-fetch` to hit Instagram's API and specify what html, css, js you'd like to add to the page.
   * */

  {
    shortcode: 'numberOfPages',
    run: async ({ allRequests }) => {
      // allRequests represents 'request' objects for all of the pages of our site, if we know the length of that we know the length of our site.
      return {
        html: allRequests.length,
        // other values can be omitted.
      };
    },
  },
];
