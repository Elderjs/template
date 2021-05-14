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
</style>

<div class="container">
  {@html templateHtml}
</div>
