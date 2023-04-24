<script>
	export let endpoint = '/subscribe.js';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	$: isSubmitted = false;
	$: message = '';
	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: ''
		},
		onSubmit: async (values) => {
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					body: JSON.stringify({ email: values.email })
				});
				console.log('response', response);
				if (response.status == 400) {
					message = 'Already Subscribed!';
				}
				if (response.status == 200) {
					message = 'Thanks for Subscribing!';
				}

				message = 'This absolutely does not work yet';

				// const json = await response.json()
				isSubmitted = true;
				setTimeout(() => {
					$form.email = '';
					isSubmitted = false;
				}, 3000);
			} catch (error) {
				console.error(error);
			}
		}
	});
</script>

<form class="flex" action={endpoint} method="post" on:submit|preventDefault={handleSubmit}>
	<label for="email">
		<input
			type="email"
			name="email"
			id="email"
			placeholder="enter email"
			class="p-5 border-2 border-dark placeholder:text-light bg-dark text-light focus:outline-none
			focus:border-pink-600"
			on:change={handleChange}
			bind:value={$form.email} />
	</label>
	<button class="text-black p-5" type="submit">subscribe</button>
</form>
{#if isSubmitted}
	<h5 transition:slide>{message}</h5>
{/if}
