<!-- src/components/AsyncRoute.svelte -->
<script>
	import Loading from "./Loading.svelte";

	export let promise;
	export let params = {};

	async function loadComponent() {
		try {
			const module = await promise;
			const Component = module.default || module;
			return Component;
		} catch (e) {
			const error = e;
			return error;
		}
	}
</script>

{#await loadComponent()}
	<Loading />
{:then Component}
	<svelte:component this={Component} {...params} />
{/await}
