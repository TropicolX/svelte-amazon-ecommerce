<script>
	import { onMount } from "svelte";

	export let src;
	export let alt;
	export let className = "";

	let img;
	let isVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					isVisible = true;
					observer.disconnect();
				}
			});
		});

		if (img) {
			observer.observe(img);
		}

		return () => {
			if (img) {
				observer.unobserve(img);
			}
		};
	});
</script>

<img
	bind:this={img}
	class={className}
	{src}
	loading={isVisible ? "eager" : "lazy"}
	{alt}
/>

<style>
</style>
