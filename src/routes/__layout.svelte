<script>
	import Header from '$lib/header/Header.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import MiniCart from '$lib/components/MiniCart.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<MiniCart />

<footer>
	<ContactForm />
</footer>

<style>
	main {
		min-height: 100vh;
		padding-top: var(--headerHeight);
	}
</style>
