<script>
  export let request;
</script>

These params are generated from the url. They are only available in SSR mode unless the `all()` function returns
requests.

<ul>
  <li>foo: {request.foo}</li>
  <li>bar: {request.bar}</li>
</ul>
