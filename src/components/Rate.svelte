<script>
	export let value = 0;
	export let max = 5; // Maximum number of stars
	export let allowHalf = false;
	export let allowClear = true;

	let hoverValue = 0;

	function handleHover(index) {
		hoverValue = allowHalf ? index + 0.5 : index + 1;
	}

	function handleLeave() {
		hoverValue = 0;
	}

	function handleClick(index) {
		const clickedValue = allowHalf ? index + 0.5 : index + 1;
		value = allowClear && value === clickedValue ? 0 : clickedValue;
	}
</script>

<div>
	{#each Array(max) as _, index}
		<span
			class="star"
			on:mouseover={() => handleHover(index)}
			on:mouseleave={handleLeave}
			on:click={() => handleClick(index)}
		>
			{#if allowHalf && hoverValue === index + 0.5}
				★
			{:else if value > index}
				★
			{:else}
				☆
			{/if}
		</span>
	{/each}
</div>

<style>
	.star {
		color: #ffd700; /* Gold color for the stars */
		cursor: pointer;
	}
</style>
