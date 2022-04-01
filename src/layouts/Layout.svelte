<script>
  import style from '../../assets/style.css';
  export let templateHtml, settings;
</script>

<style>
  :global(h1) {
    font-style: italic;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }
  .footer {
    padding: 2rem 0;
    background: #06395a;
    padding-top: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: #f4f7fb;
    text-align: center;
    font-size: 14px;
  }
  .footer a {
    color: #f4f7fb;
  }
  :global(ul li),
  :global(ol li) {
    margin-bottom: 0.3rem;
  }
</style>

<svelte:head>
  <!-- You can remove this balloon it is just for hover effects -->
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
  <script>
    document.addEventListener('ejs', (e) => {
      console.log('Layout.svelte > Component Mount Detail', e.detail);
    });
  </script>
</svelte:head>

<div class="container">
  {@html templateHtml}
</div>
<div class="footer">Built with ❤ and <a href="https://elderguide.com/tech/elderjs/">Elder.js</a></div>
