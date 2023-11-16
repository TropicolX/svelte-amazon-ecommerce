<script>
	import {
		Icon,
		CurrencyDollar,
		GlobeAlt,
		ChevronUp,
	} from "svelte-hero-icons";
</script>

<footer>
	<div class="top">
		<Icon src={ChevronUp} class="icon" />
		<p>Top of page</p>
	</div>
	<div class="middle">
		<ul class="nav">
			<li>Amazon.com</li>
			<li>Your Lists</li>
			<li>Find a Gift</li>
			<li>Browsing History</li>
			<li>Returns</li>
			<li>Cutomer Service</li>
		</ul>
		<ul class="nav">
			<li>Your Orders</li>
			<li>Gift Cards & Registry</li>
			<li>Your Account</li>
			<li>Sell products on Amazon</li>
		</ul>
	</div>

	<div class="bottom">
		<div class="settings">
			<p>
				<Icon src={GlobeAlt} class="icon" />
				English
			</p>
			<p>
				<Icon src={CurrencyDollar} class="icon" />
				USD - U.S. Dollar
			</p>
		</div>
		<div class="legal">
			<ul>
				<li>Conditions of Use</li>
				<li>Privacy Notice</li>
				<li>Interest-Based Ads</li>
			</ul>
			<div>© 1996-2021, Amazon.com, Inc. or its affiliates</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.top {
		background: #394450;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		padding: 0.5rem;

		:global(.icon) {
			color: white;
			width: 1.2rem;
			margin-bottom: 0.2rem;
		}

		p {
			@extend %text-xs;
			text-transform: uppercase;
		}
	}

	.middle {
		display: flex;
		align-items: baseline;
		padding: 1.25rem;
		background: #1d242c;
		color: white;

		& > :nth-child(2) {
			margin-left: 3rem;
		}
		li {
			padding: 0.5rem 0;
			cursor: pointer;
		}
	}

	.bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #020a14;
		padding: 2rem 1.25rem;
		color: white;

		.settings {
			display: flex;
			align-items: center;
			margin-bottom: 1.25rem;

			p {
				cursor: pointer;
				display: flex;
				align-content: center;
				padding: 0 1rem;
			}
			:global(.icon) {
				width: 1.3rem;
				margin-right: 0.5rem;
			}
		}

		.legal {
			font-size: 0.75rem;
			font-weight: 300;
			display: flex;
			flex-direction: column;
			align-items: center;

			ul {
				cursor: pointer;
				display: flex;
				margin-bottom: 0.6rem;

				& > :nth-child(n) {
					margin-left: 0.8rem;
				}

				& > :nth-child(1) {
					margin-left: 0;
				}
			}
		}
	}

	@media (min-width: 768px) {
		.middle {
			justify-content: space-around;
		}
	}
</style>
