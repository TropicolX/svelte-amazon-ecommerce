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
</script>

<div class="home">
	<Header />
	<main>
		<Banner />
		<ProductFeed {products} />
	</main>
	<Footer />
</div>

<style lang="scss">
	.home {
		background: $bg-gray;
	}
</style>
