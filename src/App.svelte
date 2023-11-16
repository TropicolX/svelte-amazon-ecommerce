<script>
	import { Router, Route } from "svelte-navigator";
	import AsyncComponent from "./components/AsyncComponent.svelte";
	import Header from "./components/Header.svelte";

	const homePromise = import("./pages/Home.svelte");
	const checkoutPromise = import("./pages/Checkout.svelte");
</script>

<Router>
	<Header />
	<Route path="/" let:params>
		<AsyncComponent promise={homePromise} />
	</Route>
	<Route path="/checkout" let:params>
		<AsyncComponent promise={checkoutPromise} />
	</Route>
</Router>
