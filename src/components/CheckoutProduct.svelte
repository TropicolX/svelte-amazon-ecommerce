<script>
	import { cart } from "../stores";

	export let id;
	export let name;
	export let price;

	const removeProduct = () => {
		cart.removeItem(id);
	};
</script>

<div>
	<h3>
		{name} - ${price}{" "}
		<button class="inline-btn" on:click={removeProduct}> Remove </button>
	</h3>
</div>
