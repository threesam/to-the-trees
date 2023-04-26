import nodemailer from 'nodemailer';
import { render } from 'svelte-email';
import Contact from '$lib/emails/Contact.svelte';

export async function POST({ request }) {
	const values = await request.formData();
	console.log('🚀 ~ file: +server.ts:7 ~ POST ~ values:', values);

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_SERVER,
		port: process.env.SMTP_SERVER_PORT,
		secure: false,
		auth: {
			user: process.env.SMTP_USERNAME,
			pass: process.env.SMTP_PASSWORD
		}
	});

	const emailHtml = render({
		template: Contact,
		props: {
			message: 'Svelte'
		}
	});

	const options = {
		from: 'you@example.com',
		to: 'user@gmail.com',
		subject: 'hello world',
		html: emailHtml
	};

	// transporter.sendMail(options);
}
