<script>
  export let data, request, settings;
</script>

<style>
  a {
    margin-bottom: 1rem;
    display: inline-block;
  }
</style>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content="A Simple Route" />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<a href="/">&LeftArrow; Home</a>

<h1>{data.title}</h1>

<ul>
  {#each data.steps as step}
    <li>{@html step}</li>
  {/each}
</ul>

{@html data.content}
