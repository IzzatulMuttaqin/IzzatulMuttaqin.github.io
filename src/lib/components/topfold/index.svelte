<div class="top-fold__container">
	<div class="top-fold__about">
		<h2 class="top-fold__about_head" id="about">About</h2>
		<h3 class="top-fold__about_title">
			<span class="top-fold__about_title_highlight">Front End</span> Software Engineer
		</h3>
	</div>
</div>

<style>
	.top-fold__container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.top-fold__about {
		width: ca1c(100% - 16px);
		padding: 32px;
	}

	.top-fold__about_head {
		margin: 0;
		font-size: 16px;
		line-height: 18px;
		font-weight: 300;
		color: var(--grey);
	}

	.top-fold__about_title {
		font-size: 32px;
		line-height: 36px;
		font-weight: 600;
		color: var(--white);
		margin: 10px 0;
	}

	.top-fold__about_title_highlight {
		color: var(--dark-grey);
		text-shadow: 1px 1px var(--grey);
	}

	@media screen and (min-width: 768px) {
		.top-fold__container {
			flex-direction: row;
		}

		.top-fold__about {
			width: 60%;
			padding: 48px;
		}

		.top-fold__about_head {
			font-size: 24px;
			line-height: 28px;
		}

		.top-fold__about_title {
			font-size: 48px;
			line-height: 54px;
			width: 50%;
			margin: 25px 0;
		}
	}
</style>
