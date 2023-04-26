<script>
	import { Hr, Html, Text } from 'svelte-email';

	export let message = '';
</script>

<Html lang="en">
	<Text>{message}!</Text>
	<Hr />
</Html>
