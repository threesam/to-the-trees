// import dotenv from 'dotenv'
// import Stripe from 'stripe'
// dotenv.config()

// const stripe = Stripe(process.env.VITE_STRIPE_API_KEY)

// export async function post({request}) {
// 	console.log('request', request);
// 	let data;
// 	let eventType;
// 	if (process.env.VITE_STRIPE_WEBHOOK_SECRET) {
// 		let event;

// 		// SvelteKit may sometimes modify the incoming request body
// 		// However, Stripe requires the exact body it sends to construct an Event
// 		// To avoid unintended SvelteKit modifications, we can use this workaround:
// 		const payload = await request.json();
// 		console.log('payload', payload.data.object.display_items);

// 		const signature = request.headers['stripe-signature'];
// 		try {
// 			event = stripe.webhooks.constructEvent(payload, signature, process.env.VITE_STRIPE_WEBHOOK_SECRET);
// 			data = event.data;
// 			eventType = event.type;
// 		} catch (err) {
// 			return {
// 				status: 500,
// 				body: {
// 					error: err
// 				}
// 			};
// 		}
// 	} else {
// 		data = request.body.data;
// 		eventType = request.body.type;
// 	}

// 	switch (eventType) {
// 		case 'checkout.session.completed':
// 			// Payment is successful and the subscription is created.
// 			// You should provision the subscription and save the customer ID to your database.
// 			console.log('Event: checkout.session.completed', data);
// 			break;
// 		case 'invoice.paid':
// 			// Continue to provision the subscription as payments continue to be made.
// 			// Store the status in your database and check when a user accesses your service.
// 			// This approach helps you avoid hitting rate limits.
// 			console.log('Event: invoice.paid', data);
// 			break;
// 		case 'invoice.payment_failed':
// 			// The payment failed or the customer does not have a valid payment method.
// 			// The subscription becomes past_due. Notify your customer and send them to the
// 			// customer portal to update their payment information.
// 			console.log('Event: invoice.payment_failed', data);
// 			break;
// 		default:
// 		// Unhandled event type
// 	}

// 	return {
// 		status: 200,
// 		headers: {},
// 		body: {
// 			message: 'Success'
// 		}
// 	};
// }