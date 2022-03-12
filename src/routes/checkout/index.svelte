<script>
	import { lineItems } from '$lib/stores/cart';
	function handleSubmit() {
		console.log('lineItems', $lineItems);
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<button type="submit">Checkout</button>
	</form>
</div>

<style>
	div {
		display: grid;
		place-content: center;
		min-height: 80vh;
		width: 100%;
	}
</style>
