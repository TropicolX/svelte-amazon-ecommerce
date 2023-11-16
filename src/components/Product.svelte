<script>
	import Rate from "./Rate.svelte";
	import LazyImage from "./LazyImage.svelte";
	import { cart } from "../stores";
	import { amazonChoiceUrl } from "../constants";

	export let id;
	export let name;
	export let price;
	export let description = "";
	export let category;
	export let image;
	export let ratings_count;
	export let discountedPrice;
	export let average_rating;

	let added = false;
	let hasPrime = Math.random() < 0.5;

	const addProduct = () => {
		const product = {
			id,
			name,
			price,
			description,
			category,
			image,
			average_rating,
			ratings_count,
		};
		cart.addItem(product);
		added = true;
	};
</script>

<div class="productCard">
	<p class="category">{category}</p>
	<LazyImage alt="product-image" src={image} className="image" />
	<h4 class="name">{name}</h4>
	<Rate value={average_rating} allowHalf={true} allowClear={false} />
	{#if !hasPrime}
		<LazyImage
			alt="amazon-choice"
			src={amazonChoiceUrl}
			className="amazonChoice"
		/>
	{/if}
	<p class="description">{description}</p>
	<div class="price">
		{#if discountedPrice}
			<s>${price}</s> <span>${discountedPrice}</span>
		{:else}
			{"..."}
		{/if}
	</div>
	<button class="button" on:click={addProduct} disabled={added}>
		Add to cart
	</button>
</div>

<style lang="scss">
	:global(.stars) {
		display: flex;
	}

	:global(.star) {
		height: 1.25rem;
	}

	.productCard {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 1.25rem;
		background: hsl(0, 0%, 100%);
		z-index: 30;
		padding: 2.5rem;
		height: calc(100% - 1.25rem);

		:global(.image) {
			width: 100%;
			height: 200px;
			object-fit: contain;
		}

		.category {
			@extend %text-xs;
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			font-style: italic;
			color: $black;
		}

		.name {
			margin: 0.75rem 0;
		}

		.description {
			@extend %text-xs;
			margin: 0.5rem 0;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.price {
			margin-bottom: 1.25rem;
			font-weight: 600;
		}

		.button {
			@extend %btn;
			margin-top: auto;
		}
	}

	:global(.prime) {
		display: flex;
		align-items: center;
		margin-top: -1.25rem;

		:global(img) {
			width: 3rem;
		}

		p {
			@extend %text-xs;
			color: $text-dark-gray;
			font-weight: 600;
		}

		& > :nth-child(n) {
			margin-left: 0.5rem;
		}

		& > :nth-child(1) {
			margin-left: 0;
		}
	}

	:global(.amazonChoice) {
		margin-right: 2px;
		width: 110px;
		height: 18px;
		margin-bottom: 0.5rem;
	}
</style>
