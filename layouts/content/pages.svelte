<script>
	export let components, content, allContent, allLayouts;
</script>

{#each components as {name, fields}, i}  
  <svelte:component
  	this={allLayouts["layouts_components_" + name + "_svelte"]}
	order={i}
	{...fields}
	{content}
	{allContent}
	{allLayouts} />
{/each}