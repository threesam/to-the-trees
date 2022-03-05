<script>
	export let href, portableText;
</script>

<a rel="noopener" target="_blank" href={portableText?.mark?.href || href}>
	<slot />
</a>
