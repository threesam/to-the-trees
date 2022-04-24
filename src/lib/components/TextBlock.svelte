<script>
	export let text;

	import Link from '$lib/components/Link.svelte';
	import PortableText from '@portabletext/svelte';
</script>

<section>
	<slot name="before" />
	<PortableText
		blocks={text}
		serializers={{
			marks: {
				link: Link
			}
		}}
	/>
	<slot name="after" />
</section>

<style>
	section {
		max-width: 40rem;
		margin: 0 auto;
	}
</style>
