<script>
  export let routeHTML, settings;
</script>

<style>
  :global(h1) {
    font-style: italic;
  }
  .conainter {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="{settings.locations.assets.replace('./public', '')}style.css" />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
</svelte:head>
<div class="conainter">
  {@html routeHTML}
</div>
