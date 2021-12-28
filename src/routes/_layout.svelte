<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<style>
	main {
		min-height: 100vh;
	}
	
	.layout {
		padding: calc(3rem + var(--headerHeight)) var(--containerPadding);
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>