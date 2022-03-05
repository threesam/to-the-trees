<script>
	import { showMiniCart } from '$lib/stores/cart';

	import { lineItems } from '$lib/stores/cart';

	$: totalPrice = $lineItems.length ? $lineItems.reduce((acc, curr) => acc + curr.price, 0) : 0;

	import { getPrice } from '$lib/utils/products';

	function handleCheckout() {
		fetch('/checkout', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify($lineItems)
		});
	}
</script>

{#if $showMiniCart}
	<section>
		<div on:click={() => ($showMiniCart = !$showMiniCart)} class="overlay" />
		<aside>
			<h2>Cart</h2>
			<ul>
				{#each $lineItems as { price, name, id }}
					<h4>{name}</h4>
					<span>${getPrice(price)}</span>
					<hr />
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
		background: grey;
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
	ul > * {
		padding-left: 1rem;
	}
	h4 {
		margin: 0;
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
</style>
