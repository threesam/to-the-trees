// import { browser } from '$app/env';
import { writable } from 'svelte/store';

// const initialValue = browser ? window.localStorage.getItem('lineItems') : [];

export const lineItems = writable([]);

export const showMiniCart = writable(false);

// lineItems.subscribe((value) => {
//   if (browser) {
//     window.localStorage.setItem('lineItems', value);
//   }
// });

// export { lineItems as default };
