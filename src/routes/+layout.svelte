<script>
	import Header from '$lib/components/header/Header.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import MiniCart from '$lib/components/MiniCart.svelte';
	import '../app.css';
</script>

<style>
	main {
		width: 100vw;
		padding-top: var(--headerHeight);
	}
</style>

<Header />

<main>
	<slot />
</main>

<MiniCart />

<footer>
	<ContactForm />
</footer>
