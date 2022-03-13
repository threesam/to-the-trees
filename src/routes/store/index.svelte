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
		display: flex;
		flex-direction: row;
		gap: 1rem;
		width: 100%;
		margin: 0 auto;
		padding: 5rem 1rem 0 1rem;
	}
</style>
