<script>
	import axios from "../axios";

	import { amazonChoiceUrl, bannerUrl, logoUrl } from "../constants";
	import { calculateDiscountedPrices, preloadImages } from "../utils";
	import Banner from "../components/Banner.svelte";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Loading from "../components/Loading.svelte";
	import ProductFeed from "../components/ProductFeed.svelte";

	const worker = new Worker("/discountCalculatorWorker.js");
	const imagesToPreload = [bannerUrl, logoUrl, amazonChoiceUrl];

	let products = [];

	const fetchProducts = async () => {
		const data = await axios
			.get("products/")
			.then((response) => response.data);

		if (!data.length) {
			return [];
		}

		const updatedProducts = await calculateDiscountedPrices(worker, data);

		products = updatedProducts;
		return updatedProducts;
	};

	const fetchData = async () => {
		try {
			const products = await fetchProducts();

			const firstThreeProductImages = products
				.slice(0, 3)
				.map((product) => product.images[0]);

			// Preload images and fetch data
			await preloadImages([
				...imagesToPreload,
				...firstThreeProductImages,
			]);
		} catch (error) {
			return error;
		}
	};
</script>

{#await fetchData()}
	<Loading />
{:then}
	<div class="home">
		<Header />
		<main>
			<Banner />
			<ProductFeed {products} />
		</main>
		<Footer />
	</div>
{/await}

<style lang="scss">
	.home {
		background: $bg-gray;
	}
</style>
