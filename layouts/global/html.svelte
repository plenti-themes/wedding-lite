<script>
  import Head from "./head.svelte";
  import Nav from "./nav.svelte";
  import Footer from "./footer.svelte";

  export let content, layout, allContent, allLayouts, env;
</script>

<html lang="en">
  <Head title={content.fields.title} {env} />
  <body>
    <Nav />
    <svelte:component
      this={layout}
      {...content.fields}
      {content}
      {allContent}
      {allLayouts}
    />
    <Footer />
  </body>
</html>
