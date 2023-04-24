<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';
	import { sketch } from '$lib/utils/sketches';
	import P5 from 'p5-svelte';

	export let data: PageData;
	let show;

	onMount(() => (show = true));
</script>

<style>
	.sketch {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		background: black;
		z-index: 10;
	}

	.container {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
</style>

<main>
	<slot />
</main>

<footer class="sketch">
	{#if show}
		<div class="absolute inset-0">
			<P5 {sketch} />
		</div>
	{/if}
	<form
		method="POST"
		action="/contact"
		class="p-10 bg-black z-0 border-2 border-white flex flex-col gap-10">
		<h4 class="text-6xl">Contact</h4>
		<label for="email">
			<input
				class="p-5 w-full bg-black text-white border-2 border-white"
				placeholder="enter email"
				type="email"
				name="email"
				id="contact-email" />
		</label>
		<textarea
			class="p-5 w-full bg-black text-white border-2 border-white"
			name="message"
			placeholder="enter message"
			id="contact-message"
			cols="30"
			rows="5" />
		<button class="p-5 bg-white text-black uppercase" type="submit">Submit</button>
	</form>
</footer>
