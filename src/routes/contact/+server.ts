import { env } from '$env/dynamic/private'

import nodemailer from 'nodemailer'
// import { render } from 'svelte-email';
// import Contact from '$lib/emails/Contact.svelte';

export async function POST({ request }) {
	const values = await request.formData()
	console.log('🚀 ~ file: +server.ts:7 ~ POST ~ values:', values)

	const transporter = nodemailer.createTransport({
		host: env.SMTP_SERVER,
		port: env.SMTP_SERVER_PORT,
		secure: false,
		auth: {
			user: env.SMTP_USERNAME,
			pass: env.SMTP_PASSWORD
		}
	})

	const options = {
		from: values.get('email'),
		to: 'sam@threesam.com',
		subject: 'hello world',
		html: `<html>
			<p>name: ${values.get('name')}</p>
			<p>message: ${values.get('message')}</p>
		</html>`
	}

	transporter.sendMail(options)
}
