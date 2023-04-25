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

<form
	class="flex flex-col lg:flex-row max-w-full flex-grow"
	action={endpoint}
	method="post"
	on:submit|preventDefault={handleSubmit}>
	<label for="email">
		<input
			type="email"
			name="email"
			id="email"
			placeholder="enter email"
			class="p-5 w-full bg-dark text-white border-2 border-light focus:outline-none
			focus:border-yellow-600 placeholder:text-light"
			on:change={handleChange}
			bind:value={$form.email} />
	</label>
	<button class="text-dark p-5 border-2 lg:border-none border-dark lg:pl-5" type="submit">
		subscribe
	</button>
</form>
{#if isSubmitted}
	<h5 transition:slide>{message}</h5>
{/if}
