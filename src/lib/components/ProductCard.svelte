<script>
	export let product = {};

	import { lineItems, showMiniCart } from '$lib/stores/cart';
	import { getPrice } from '$lib/utils/products';
	console.log('lineItems', lineItems);

	const price = getPrice(product?.price);
	const currency = product?.currency === 'usd' ? '$' : '';

	const handleClick = (product) => {
		lineItems.update((items) => [...items, product]);
		$showMiniCart = true;
		console.log('lineItems', $lineItems);
	};
</script>

<li>
	<a href={'store/' + (product.slug || '')}>
		<img src={product.images[0]} alt={product.name} />
		<h3>{product.name}</h3>
	</a>
	<p>{product.description}</p>
	<div>
		<span>{currency}{price}</span>
		<button on:click={() => handleClick(product)}>Add to Cart</button>
	</div>
</li>

<style>
	li {
		max-width: 500px;
		position: relative;
		border: 1px solid white;
		list-style: none;
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
