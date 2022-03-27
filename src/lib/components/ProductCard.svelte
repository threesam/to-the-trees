<script>
	export let product = {};
	console.log('product', product);

	import { lineItems, showMiniCart } from '$lib/stores/cart';

	const price = product?.sync_variants?.[0]?.retail_price;
	const currency = product?.sync_variants?.[0]?.currency.toLowerCase() === 'usd' ? '$' : '';

	function handleAddToCart(product) {
		const ids = $lineItems.map((item) => item.priceId);
		if (ids.includes(product.priceId)) {
			$lineItems = $lineItems.map((item) => {
				if (item.priceId === product.priceId) {
					item.quantity++;
				}
				return item;
			});
		} else {
			product.quantity = 1;
			lineItems.update((items) => [...items, product]);
		}
		$showMiniCart = true;
	}
</script>

<li>
	<a sveltekit:prefetch href={'store/' + (product.sync_product.id || '')}>
		<img src={product.sync_product.thumbnail_url} alt={product.sync_product.name} />
		<h3>{product.sync_product.name}</h3>
	</a>
	<p>{product.description}</p>
	<div>
		<span>{currency}{price}</span>
		<button on:click={() => handleAddToCart(product)}>Add to Cart</button>
	</div>
</li>

<style>
	li {
		max-width: 500px;
		position: relative;
		list-style: none;
		background-color: var(--darkGrey);
	}
	a {
		border-bottom: none;
		height: max-content;
	}
	h3 {
		margin: 0;
		padding-left: 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		max-height: 500px;
	}
	p {
		margin: 0.5rem 0;
		padding: 0 1rem;
	}
	div {
		padding: 0 1rem 1rem 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
