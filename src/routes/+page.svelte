<script>
	import PortableText from '$lib/components/PortableText.svelte';

	export let data;

	import { onMount } from 'svelte';
	import SubscribeForm from '$lib/components/SubscribeForm.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let show = false;

	onMount(() => {
		show = true;
	});
</script>

<section class="relative bg-gradient-3 w-full flex items-center justify-center h-screen">
	<h1 class="w-full grid grid-cols-2 gap-10 lg:text-6xl">
		<span class="text-black text-right">Laila</span>
		<span class="text-black text-left">Wolf</span>
	</h1>
	<!-- {#if show}
		<div class="absolute inset-0">
			<P5 sketch={tree} />
		</div>
	{/if} -->
</section>

<section class="grid grid-cols-2">
	<div class="aspect-square grid place-content-center bg-white">
		<SubscribeForm />
	</div>
	<div class="aspect-square grid place-content-center">
		<SocialLinks links={data.settings.links} size={60} color="#fff" />
	</div>
</section>

<section class="grid grid-cols-2 mb-10">
	<h1 class="grid place-content-center text-2xl lg:text-5xl">About Laila</h1>
	<img src={data.settings.image.asset.url} alt={data.settings.image} />
</section>

<PortableText blocks={data.settings.body} />
