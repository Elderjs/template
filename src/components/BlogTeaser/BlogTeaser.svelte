<script>
  export let blog;
  export let helpers;
</script>

<div class="entry">
  <a href={helpers.permalinks.blog({ slug: blog.slug })}>{blog.data.title}</a>
  <p>{blog.data.excerpt}</p>
</div>
