<script>
	export let products = [];

	import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<ul>
	{#each products as product}
		<ProductCard {product} />
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		max-width: calc(1000px + 1rem);
		margin: 0 auto;
		padding: 5rem 1rem 0 1rem;
	}
</style>
