<script>
	export let product = {};

	import { lineItems, showMiniCart } from '$lib/stores/cart';
	import { getPrice } from '$lib/utils/products';

	async function getData() {
		const res = await fetch('https://api.printful.com/store/products' + '/' + product.id, {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_PRINTFUL_TOKEN}`
			}
		});
		const data = await res.json();
		return data;
	}

	const price = getPrice(product?.price);
	const currency = product?.currency === 'usd' ? '$' : '';

	const handleClick = (product) => {
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
	};
</script>

<li>
	<a href={'store/' + (product.id || '')}>
		<img src={product.thumbnail_url} alt={product.name} />
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
		background-color: red;
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
