<script lang="ts">
	import { page } from '$app/stores';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import Logo from './Logo.svelte';
	import { showMiniCart } from '$lib/stores/cart';
</script>

<header>
	<nav>
		<div class="corner">
			<a sveltekit:prefetch href="/"><Logo /></a>
		</div>

		<!-- <ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">about</a>
			</li>
		</ul> -->
		<SocialLinks />

		<div class="corner">
			<button on:click={() => ($showMiniCart = !$showMiniCart)}>Cart</button>
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	header {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		color: var(--white);
		height: var(--headerHeight);
		background: var(--headerBackground);
		box-shadow: var(--level-2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 3rem;
		z-index: 10;
		font-family: var(--headingFont);
	}

	header a {
		color: var(--white);
		text-decoration: none;
	}

	.corner {
		height: 3em;
		width: 100px;
	}

	.corner a,
	.corner button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner button {
		background: none;
		color: white;
		padding: 0;
	}

	.corner a:first-of-type {
		justify-content: left;
	}
	.corner button:last-of-type {
		justify-content: right;
	}

	nav {
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover,
	button:hover {
		cursor: pointer;
		color: var(--green);
	}
</style>
