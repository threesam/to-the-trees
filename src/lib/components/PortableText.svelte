<script lang="ts">
	export let blocks: any[] = [];
	import { PortableText } from '@portabletext/svelte';
</script>

<style lang="scss">
	:global {
		.portable-text {
			@apply text-black;

			h1,
			h2,
			h3,
			h4,
			h5 {
				padding-bottom: 0.5rem;
				font-weight: 800;
			}
			ul,
			p {
				@apply pb-5;
			}

			a {
				@apply underline underline-offset-4;

				&:hover {
					@apply text-green-300 underline-offset-2 transition-all;
				}
			}

			blockquote {
				@apply p-5 bg-light text-dark border-2 border-dark;
			}
		}
	}
</style>

<section class="portable-text mx-auto max-w-4xl p-5">
	<PortableText value={blocks} />
</section>
