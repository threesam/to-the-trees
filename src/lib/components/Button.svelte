<script>
	export let color = 'var(--primary)';
	export let primary = false;
	export let url;
	export let textColor = 'var(--black)';

	let style;
	if (url) {
		style = `background: none; border: 2px solid ${color}; color: ${color};`;
	} else {
		style = `background: ${color}; color: ${textColor}`;
	}

	function handleClick() {
		if (url) {
			window.location.href = url;
		}
	}
</script>

{#if url}
	<a class:primary href={url} {style}>
		<slot />
	</a>
{:else}
	<button on:click={() => handleClick()} class:primary type="button" {style}>
		<slot>Button</slot>
	</button>
{/if}

<style>
	button,
	a {
		margin: 0;
		margin-top: 0.5rem;
		text-decoration: none;
		font-family: var(--headingFont);
		font-size: 1rem;
		padding: 0.69rem 1rem;
		color: white;
		line-height: 1;
		transition: 0.3s ease-in-out all;
	}
	button:hover,
	a:hover {
		transform: scale(0.98);
	}
	.primary {
		padding: 1.38rem 1rem;
		font-size: 130%;
		font-weight: 900;
	}
</style>
