<script>
	export let data;
	data.badge = 'coming soon...';

	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	let show = false;
	onMount(() => (show = true));
</script>

<section>
	{#if show}
		<div class="banner">
			<div class="banner-content">
				<div class="block">
					{#if data.badge}
						<span class="">{data.badge}</span>
					{/if}
					<h1>{data.title}</h1>
				</div>
				<div class="block">
					<p>{data.description}</p>
				</div>
			</div>
			<img
				in:scale={{ duration: 2000, start: 1.2, opacity: 0.2 }}
				src={data.image}
				alt={data.alt}
			/>
		</div>
	{/if}
</section>

<style>
	section {
		position: relative;
		height: 80vh;
		width: 100%;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.69));
		overflow: hidden;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		z-index: -10;
	}
	.banner {
		height: 100%;
		position: relative;
	}
	.banner-content {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		padding: 3rem;
	}
	.block {
		width: 50%;
	}

	.block:last-of-type {
		text-align: right;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.block p {
		max-width: 30rem;
	}
</style>
