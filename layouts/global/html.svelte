<script>
  import Head from "./head.svelte";
  import Nav from "./nav.svelte";

  export let content, layout, allContent, allLayouts, env;
</script>

<html lang="en">
  <Head title={content.filename} {env} />
  <body>
    <Nav />
    <svelte:component
      this={layout}
      {...content.fields}
      {content}
      {allContent}
      {allLayouts}
    />
  </body>
</html>
