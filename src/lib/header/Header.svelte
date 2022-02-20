<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a sveltekit:prefetch href="/">home</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">about</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
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
		padding: 0 1em;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--green);
	}
</style>
