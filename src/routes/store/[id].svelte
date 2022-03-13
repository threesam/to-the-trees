<script>
	export let product = {};

	import { onMount } from 'svelte';

	$: selected = {
		id: null,
		size: null,
		price: null
	};

	onMount(() => {
		const first = product.sync_variants[0];
		selected = {
			id: first.id,
			size: first.sku.split('_').pop(),
			price: first.retail_price
		};
	});

	function handleClick(variant) {
		selected.id = variant.id;
		selected.size = variant.sku.split('_').pop();
		selected.price = variant.retail_price;
	}
</script>

<br />
<br />
<h1>{product.sync_product.name}</h1>
<p>price: ${selected.price}</p>
<img src={product.sync_product.thumbnail_url} alt={product.sync_product.name} />
<h2>Sizes</h2>
<ul>
	{#each product.sync_variants as variant}
		<li class:active={selected.id === variant.id} on:click={handleClick(variant)}>
			{variant.sku.split('_').pop()}
		</li>
	{/each}
</ul>
<br />
<hr />
<br />
<pre>{JSON.stringify(product, null, 2)}</pre>

<style>
	img {
		max-height: 500px;
		width: auto;
	}
	ul {
		display: flex;
		gap: 1rem;
	}
	li {
		padding: 1rem 2rem;
		list-style: none;
		border: 2px solid white;
	}
	li.active {
		background: white;
		color: black;
	}
</style>
