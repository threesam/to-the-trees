<script lang="ts">
	export let blocks: any[] = []
	import { PortableText } from '@portabletext/svelte'
	import Quote from './Quote.svelte'
</script>

<section class="portable-text mx-auto max-w-4xl">
	<PortableText
		components={{
			block: {
				blockquote: Quote
			}
		}}
		value={blocks}
	/>
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
				@apply border-b-2 border-pink-200 transition-all duration-100;

				&:hover {
					@apply border-transparent pb-1 text-pink-200;
				}
			}
		}
	}
</style>
