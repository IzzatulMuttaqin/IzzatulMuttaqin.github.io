<div class="top-fold__container">
	<div class="top-fold__about">
		<div class="top-fold__about_position">
			<h2 class="top-fold__about_head" id="about">About</h2>
			<h3 class="top-fold__about_title">
				<span class="top-fold__about_title_highlight">Front End</span> Software Engineer
			</h3>
			<p class="top-fold__about_content">
				Hello, I am <span class="top-fold__about_title_highlight">Izzatul Muttaqin</span>.
			</p>
			<p class="top-fold__about_content">
				Currently working as Front End Software Engineer at <a
					class="top-fold__about_title_highlight top-fold__about_content_href"
					href="https://verihubs.com/" target="_blank">Verihubs</a
				>
			</p>
		</div>
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
		min-height: 100vh;
		position: relative;
	}

	.top-fold__about_position {
		width: 80%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.top-fold__about_head {
		margin: 0;
		font-size: 16px;
		line-height: 18px;
		font-weight: 300;
		color: var(--grey);
	}

	.top-fold__about_content_href {
		color: inherit;
		text-decoration: none;
	}

	.top-fold__about_content {
		color: var(--white);
		font-size: 18px;
		line-height: 22px;
		font-weight: 400;
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
			min-height: 0;
			width: 60%; 
			height: 100vh;
			border-right: 1px solid var(--grey);
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

		.top-fold__about_content {
			font-size: 32px;
			line-height: 36px;
		}
	}
</style>
