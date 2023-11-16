<script>
	import { Router, Route } from "svelte-navigator";
	import AsyncComponent from "./components/AsyncComponent.svelte";

	const homePromise = import("./pages/Home.svelte");
	const checkoutPromise = import("./pages/Checkout.svelte");
</script>

<Router>
	<Route path="/" let:params>
		<AsyncComponent promise={homePromise} />
	</Route>
	<Route path="/checkout" let:params>
		<AsyncComponent promise={checkoutPromise} />
	</Route>
</Router>
