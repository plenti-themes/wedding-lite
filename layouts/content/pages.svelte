<script>
	export let components, content, allContent, allLayouts;
</script>

{#each components as {name, fields}}  
  <svelte:component
  	this={allLayouts["layouts_components_" + name + "_svelte"]}
	{...fields}
	{content}
	{allContent}
	{allLayouts} />
{/each}