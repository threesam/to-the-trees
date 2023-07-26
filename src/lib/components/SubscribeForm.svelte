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
					message = 'Email Confirmation sent...'
					setTimeout(() => (isSubmitted = false), 1300)
					setTimeout(() => {
						isSubmitted = true
						message = '...so check that spam folder'
					}, 1500)
				} else {
					message = 'Uh oh, error'
				}

				// const json = await response.json()
				isSubmitted = true
				setTimeout(() => {
					$form.email = ''
					isSubmitted = false
				}, 3300)
			} catch (error) {
				console.error(error)
			}
		}
	})
</script>

<form
	class="flex h-16 max-w-full flex-col gap-10 lg:flex-row lg:gap-0"
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
			class="h-16 w-full rounded-none border-2 border-gray-300 bg-dark p-5 text-white placeholder:text-gray-300
			focus:border-primary focus:outline-none focus:placeholder:text-gray-300/60"
			on:change={handleChange}
			bind:value={$form.email}
		/>
		{#if isSubmitted}
			<span class="absolute -bottom-8 left-0 w-max bg-dark" in:fly={{ x: -30 }} out:fly={{ x: 30 }}
				>{message}</span
			>
		{/if}
	</label>
	<button
		class="h-16 border-2 border-gray-300 bg-gray-300 p-5 text-dark lg:border-none lg:pl-5"
		type="submit"
	>
		subscribe
	</button>
</form>
