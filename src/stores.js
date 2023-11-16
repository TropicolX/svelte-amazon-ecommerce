import { writable } from "svelte/store";

function createCart() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		addItem: (payload) => update((cart) => [...cart, payload]),
		removeItem: (payload) =>
			update((cart) => cart.filter((item) => item.id !== payload)),
		reset: () => set([]),
	};
}

export const cart = createCart();
