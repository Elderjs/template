<script>
  import HookDetail from "../../components/HookDetail/HookDetail.svelte";

  export let data, helpers;
</script>

<style>
  a {
    margin-bottom: 1rem;
    display: inline-block;
  }
</style>

<svelte:head>
  <title>{data.hook} Hook Interface: Elder.js Example Project</title>
</svelte:head>

<a href="/">&LeftArrow; Home</a>

<HookDetail hook={data} {helpers} />
