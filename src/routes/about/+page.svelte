<script lang="ts">
	import PortableText from '$lib/components/PortableText.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('🚀 ~ file: +page.svelte:6 ~ data:', data.settings.image);
</script>

<section class="grid grid-cols-2 mb-10">
	<h1 class="grid place-content-center text-2xl lg:text-5xl">About Laila</h1>
	<img src={data.settings.image.asset.url} alt={data.settings.image} />
</section>

<PortableText blocks={data.settings.body} />
