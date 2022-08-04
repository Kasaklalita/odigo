<template>
	<header class="header">
		<narrow-wrapper>
			<div class="header__wrapper">
				<div class="header__logo">
					<a href="/" class="header__logo-link">
						<img src="../assets/odigo-logo.svg" alt="" class="header__logo-pic">
					</a>
				</div>
				<nav class="header__nav">
					<ul class="header__list">
						<li class="header__item">
							<a href="#" class="header__link">Articles</a>
						</li>
						<li class="header__item">
							<a href="#" class="header__link">Locations</a>
						</li>
						<li class="header__item">
							<a href="#" class="header__link">Videos</a>
						</li>
						<li class="header__item">
							<a href="#" class="header__link">Sign in</a>
						</li>
					</ul>
				</nav>
			</div>
		</narrow-wrapper>
	</header>
</template>

<script>
	export default {
		name: "TheHeader",
		mounted() {
			const header = document.querySelector('.header');
			window.onscroll = () => {
				if (window.pageYOffset > 50) {
					header.classList.add('header_active');
				} else {
					header.classList.remove('header_active');
				}
			};
		}
	}
</script>

<style scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		transition: 0.2s linear;
		padding-bottom: 20px;
		z-index: 20;
	}
	.header_active {
		background: #0E1D28;
	}
	.header__wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		padding-top: 56px;
	}
	.header__list {
		display: flex;
		flex-wrap: wrap;
		gap: 82px;
	}
	.header__link {
		font-size: 1.1rem;
		line-height: 1.5rem;
		color: white;
		text-decoration: none;
	}
	.header__link:hover,
	.header__link:focus,
	.header__link:active {
		opacity: 75%;
	}
</style>