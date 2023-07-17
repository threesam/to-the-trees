<script lang="ts">
	export let items = [] as {
		_id: string
		image: {
			asset: {
				url: string
			}
		}
		url: string
		title: string
	}[]
</script>

<div class="slider bg-light relative w-full overflow-scroll">
	<div class="slide-track flex">
		{#each items as item (item._id)}
			<a href={`${item.url}`} class="slide relative h-40 flex-none md:w-1/4">
				<img
					alt={item.title}
					class="h-full p-5"
					decoding="async"
					loading="lazy"
					src={item.image.asset.url}
				/>
				<!-- <div class="absolute left-0 top-0 z-40 ml-44 mt-32 bg-black p-4">{item.title}</div> -->
			</a>
		{/each}
	</div>
</div>

<style>
	@-webkit-keyframes scroll {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(calc(-250px * 7));
			transform: translateX(calc(-250px * 7));
		}
	}

	@keyframes scroll {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(calc(-250px * 7));
			transform: translateX(calc(-250px * 7));
		}
	}

	.slider::after {
		-webkit-transform: rotateZ(180deg);
		transform: rotateZ(180deg);
	}

	.slider .slide-track {
		-webkit-animation: scroll 40s linear infinite;
		animation: scroll 40s linear infinite;
	}
</style>
