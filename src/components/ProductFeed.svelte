<script>
	import { FixedSizeGrid as Grid, styleString as sty } from "svelte-window";

	import Product from "./Product.svelte";

	export let products = [];

	// $: products = products.map((product) => ({}));
	console.log(products);

	const columnWidth = 435; // Width of each column
	const rowHeight = 529.16; // Height of each row

	const columnCount = Math.floor(window.innerWidth / columnWidth); // Calculate number of columns based on window width
	const rowCount = Math.ceil(products.length / columnCount); // Calculate number of rows

	const getProps = ({ columnIndex, rowIndex }) => {
		const index = rowIndex * columnCount + columnIndex;
		if (index >= products.length) {
			return null; // Return null for cells outside the range of products
		}

		const product = products[index];

		return {
			...product,
			name: product.title,
			image: product.images[0],
			category: product.category.name,
			average_rating: 5,
			ratings_count: 20,
		};
	};
</script>

<Grid
	{columnCount}
	{columnWidth}
	height={rowHeight * rowCount}
	{rowCount}
	{rowHeight}
	width={columnWidth * columnCount}
	className="productFeed"
	let:items
>
	{#each items as item (item.key)}
		<div class={sty(item.style)}>
			<Product {...getProps(item)} />
		</div>
	{/each}
</Grid>

<style lang="scss">
	:global(.productFeed),
	:global(.productFeed > div) {
		display: grid;
		grid-auto-flow: row dense;
		margin: 0 auto;
		z-index: 100;
	}

	@media (min-width: 768px) {
		:global(.productFeed),
		:global(.productFeed > div) {
			grid-template-columns: repeat(2, 1fr);
		}

		:global(.productFeed) {
			margin-top: -8em;
		}
	}

	@media (min-width: 1024px) {
		:global(.productFeed),
		:global(.productFeed > div) {
			grid-template-columns: repeat(3, 1fr);
		}

		:global(.productFeed) {
			margin-top: -13rem;
		}
	}

	@media (min-width: 1536px) {
		:global(.productFeed),
		:global(.productFeed > div) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
