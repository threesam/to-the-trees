<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
