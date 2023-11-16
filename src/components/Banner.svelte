<script>
	import { bannerUrl } from "../constants";
</script>

<div>
	<div class="container">
		<div class="gradient" />
		<div>
			<img class="image" src={bannerUrl} alt="audible original" />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
	}

	.gradient {
		position: absolute;
		width: 100%;
		height: 30%;
		z-index: 20;
		bottom: 0;
		margin-bottom: -1px;
		background-image: linear-gradient(to top, $bg-gray, transparent);
	}

	.image {
		width: 100%;
		aspect-ratio: 1425/570;
	}

	@keyframes skeleton {
		from {
			opacity: 0.5;
		}

		to {
			opacity: 1;
		}
	}
</style>
