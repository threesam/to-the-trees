<script lang="ts">
	export let blocks: any[] = []
	import { PortableText } from '@portabletext/svelte'
</script>

<section class="portable-text mx-auto mb-32 max-w-4xl">
	<PortableText value={blocks} />
</section>

<style lang="scss">
	:global {
		.portable-text {
			h1,
			h2,
			h3,
			h4,
			h5 {
				padding-bottom: 0.5rem;
				font-weight: 800;

				@apply text-pink-100;
			}
			ul,
			p {
				@apply pb-5;
			}

			a {
				@apply border-b-2 border-primary transition-all duration-100;

				&:hover {
					@apply border-transparent pb-1 text-primary;
				}
			}

			blockquote {
				@apply mb-5 mt-8 bg-gray-200 p-5 text-xl text-dark;
			}
		}
	}
</style>
