<script>
	export let endpoint = '/api/subscribe'
	import { fly } from 'svelte/transition'
	import { createForm } from 'svelte-forms-lib'
	$: isSubmitted = false
	$: message = ''
	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: ''
		},
		onSubmit: async (values) => {
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					body: JSON.stringify({ email: values.email })
				})

				if (response.status === 200) {
					message = 'Thanks for Subscribing!'
				} else {
					message = 'Uh oh, error'
				}

				// const json = await response.json()
				isSubmitted = true
				setTimeout(() => {
					$form.email = ''
					isSubmitted = false
				}, 3000)
			} catch (error) {
				console.error(error)
			}
		}
	})
</script>

<form
	class="flex max-w-full flex-grow flex-col gap-10 lg:flex-row lg:gap-0"
	action={endpoint}
	method="post"
	on:submit|preventDefault={handleSubmit}
>
	<label class="relative" for="email">
		<input
			type="email"
			name="email"
			id="email"
			placeholder="enter email"
			class="border-light bg-dark placeholder:text-light focus:placeholder:text-light/60 w-full rounded-none border-2 p-5
			text-white focus:border-pink-300 focus:outline-none"
			on:change={handleChange}
			bind:value={$form.email}
		/>
		{#if isSubmitted}
			<span class="bg-dark absolute -bottom-8 left-0" in:fly={{ x: -30 }} out:fly={{ x: 30 }}
				>{message}</span
			>
		{/if}
	</label>
	<button class="border-light bg-light text-dark border-2 p-5 lg:border-none lg:pl-5" type="submit">
		subscribe
	</button>
</form>
