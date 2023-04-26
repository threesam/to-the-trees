<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { sketch } from '$lib/utils/sketches';
	import P5 from 'p5-svelte';

	let show;

	let name = '';
	let email = '';
	let message = '';

	onMount(() => (show = true));
</script>

<main class="max-w-screen">
	<slot />
</main>

<footer class="h-screen flex flex-col justify-center items-center relative bg-dark z-10 px-5">
	{#if show}
		<div class="absolute inset-0">
			<P5 {sketch} />
		</div>
	{/if}
	<form
		method="POST"
		netlify
		class="p-5 lg:p-10 bg-black z-0 border-2 w-96 max-w-full border-white flex flex-col gap-5
		lg:gap-10 transition-all duration-300">
		<h4 class="text-7xl tracking-[0.15em]">Contact</h4>
		<label for="email">
			<input
				class="p-5 w-full bg-black rounded-none text-white border-2 border-white focus:outline-none
				focus:border-yellow-600 placeholder:text-light"
				placeholder="enter email"
				bind:value={email}
				type="email"
				name="email"
				id="contact-email" />
		</label>
		<label for="name">
			<input
				class="p-5 w-full bg-black rounded-none text-white border-2 border-white focus:outline-none
				focus:border-yellow-600 placeholder:text-light"
				placeholder="enter name"
				bind:value={name}
				type="name"
				name="name"
				id="contact-name" />
		</label>
		<textarea
			class="p-5 w-full bg-black rounded-none text-white border-2 border-white focus:outline-none
			focus:border-yellow-600 placeholder:text-light"
			name="message"
			placeholder="enter message"
			bind:value={message}
			id="contact-message"
			cols="30"
			rows="3" />
		<button class="p-5 bg-white text-black uppercase" type="submit">Submit</button>
	</form>
</footer>
