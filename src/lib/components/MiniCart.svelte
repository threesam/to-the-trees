<script>
	import { showMiniCart } from '$lib/stores/cart';

	import { lineItems } from '$lib/stores/cart';

	$: totalPrice = $lineItems.length
		? $lineItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
		: 0;

	import { getPrice } from '$lib/utils/products';

	async function handleCheckout() {
		const res = await fetch('/checkout.json', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				items: $lineItems
			})
		});
		const { url } = await res.json();
		window.location.href = url;
	}
</script>

{#if $showMiniCart}
	<section>
		<div on:click={() => ($showMiniCart = !$showMiniCart)} class="overlay" />
		<aside>
			<h2>Cart</h2>
			<ul>
				{#each $lineItems as { price, name, images, quantity }}
					<li>
						<img height="100" width="100" src={images[0]} alt={name} />
						<div class="item-price">
							<h4>{name}</h4>
							<p>${getPrice(price)}</p>
							<p>quantity: {quantity}</p>
						</div>
					</li>
				{/each}
			</ul>
			<div class="checkout">
				<div class="price">
					<span>Subtotal</span>
					<span>${getPrice(totalPrice)}</span>
				</div>
				<button on:click={handleCheckout}>Checkout</button>
			</div>
		</aside>
	</section>
{/if}

<style>
	section {
		position: absolute;
		display: flex;
		flex-flow: row;
		top: 0;
		right: 0;
		width: 100%;
		height: 100vh;
		z-index: 10;
	}
	.overlay {
		width: 70%;
		background: rgba(0, 0, 0, 0.69);
	}
	aside {
		width: 30%;
		background: var(--background);
	}
	h2 {
		margin: 0;
		padding: 1rem;
		width: 100%;
		background-color: var(--green);
	}
	ul {
		padding: 0;
	}
	li {
		padding: 1rem 0 0 1rem;
		display: flex;
		flex-direction: row;
	}
	li img {
		height: 100px;
		width: 100px;
	}

	.item-price {
		padding-left: 1rem;
	}
	h4 {
		margin: 0;
		line-height: 1;
	}
	.checkout {
		background-color: var(--darkGrey);
		position: absolute;
		bottom: 0;
		right: 0;
		width: 30%;
	}
	.price {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
	}
	.checkout button {
		padding: 1rem;
		box-shadow: none;
		width: 100%;
		color: white;
		text-transform: uppercase;
		font-family: var(--headingFont);
		font-size: var(--h4);
	}
	p {
		margin-bottom: 0.25rem;
	}
</style>
