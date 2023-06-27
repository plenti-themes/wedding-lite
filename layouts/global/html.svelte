<script>
  import Head from "./head.svelte";
  import Nav from "./nav.svelte";
  import Footer from "./footer.svelte";
  import Login from "./login.svelte";

  export let content, layout, allContent, allLayouts, env, user;
</script>

<html lang="en">
  <Head title={content.fields.title} {env} />
  <body>
    {#if user && $user.isAuthenticated}
      <svelte:component this={$user.menu} {user} bind:content={content} />
    {/if}
    <Login {user} />
    <main>
      <Nav />
      <svelte:component
        this={layout}
        {...content.fields}
        {content}
        {allContent}
        {allLayouts}
      />
      <Footer />
    </main>
  </body>
</html>
