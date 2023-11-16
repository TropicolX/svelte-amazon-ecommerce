<script>
	import CheckoutProduct from "../components/CheckoutProduct.svelte";
	import Header from "../components/Header.svelte";
	import { cart } from "../stores";

	$: cartItemsCount = $cart.length;
	$: totalPrice = $cart.reduce((acc, product) => acc + product.price, 0);
</script>

<div>
	<div class="checkout">
		<Header />

		<main class="main">
			<div class="left">
				<img alt="promo" src="https://links.papareact.com/ikj" />

				<div class="cart">
					<h1>
						{#if cartItemsCount > 0}
							{"Shopping Cart"}
						{:else}
							{"Your cart is empty."}
						{/if}
					</h1>

					{#each $cart as item (item.id)}
						<CheckoutProduct
							id={item.id}
							name={item.name}
							price={item.price}
						/>
					{/each}

					{#if cartItemsCount > 0}
						<hr />
						<h3>Total price: ${totalPrice}</h3>
					{/if}
				</div>
			</div>
			<div class="right" />
		</main>
	</div>
</div>

<style lang="scss">
	.checkout {
		background: $bg-gray;
	}

	.left {
		flex-grow: 1;
		margin: 1.25rem;
	}

	.cart {
		display: flex;
		flex-direction: column;
		padding: 1.25rem;
		background: $white;

		// space-y-10
		& > :nth-child(n) {
			margin-top: 2.5rem;
		}

		& > :nth-child(1) {
			margin-top: 0;
		}

		h1 {
			@extend %text-3xl;
			border-bottom: $bg-gray solid 1px;
			padding-bottom: 1rem;
		}
	}

	.right {
		position: relative;
	}

	@media (min-width: 1024px) {
		.main {
			display: flex;
		}
	}
</style>
