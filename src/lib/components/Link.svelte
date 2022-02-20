<script>
	export let href, portableText;
	console.log('portableText', portableText);
</script>

<a rel="noopener" target="_blank" href={portableText.mark.href}>
	<slot />
</a>
