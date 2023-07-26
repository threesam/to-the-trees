<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte'

	export let portableText: CustomBlockComponentProps
	console.log('portableText: ', portableText)
</script>

<blockquote class="mb-5 mt-8 bg-primary p-5 text-base text-dark">
	{portableText.value.children[0].text}
</blockquote>
