<template>
	<header class="header">
		<narrow-wrapper>
			<div class="header__wrapper">
				<div class="header__logo">
					<a href="/" class="header__logo-link">
						<img src="../assets/odigo-logo.svg" alt="" class="header__logo-pic">
					</a>
				</div>
				<nav class="header__nav" :class="{header__nav_active: isMobileNavOpen}">
					<ul class="header__list">
						<li class="header__item">
							<a href="#" class="header__link" @click="isMobileNavOpen = false">Articles</a>
						</li>
						<li class="header__item">
							<a href="#" class="header__link" @click="isMobileNavOpen = false">Locations</a>
						</li>
						<li class="header__item">
							<a href="#" class="header__link" @click="isMobileNavOpen = false">Videos</a>
						</li>
						<li class="header__item">
							<a href="#" class="header__link" @click="isMobileNavOpen = false">Sign in</a>
						</li>
					</ul>
					<div class="header__nav-close" @click="toggleMobileNav">
						<span class="header__nav-close-line"></span>
						<span class="header__nav-close-line"></span>
					</div>
				</nav>
				<div class="header__burger burger" @click="toggleMobileNav">
					<span class="burger__line"></span>
					<span class="burger__line"></span>
					<span class="burger__line"></span>
				</div>
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
		},
		data() {
			return {
				isMobileNavOpen: false
			}
		},
		methods: {
			toggleMobileNav() {
				this.isMobileNavOpen = !this.isMobileNavOpen;
			}
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
	.header__burger {
		width: 40px;
		height: 28px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		display: none;
	}
	.burger__line {
		display: block;
		width: 100%;
		height: 2px;
		background-color: white;
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
	
	@media screen and (max-width: 767px) {
		.header__burger {
			display: flex;
		}
		.header__nav {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: #000;
			z-index: 20;
			padding: 75px;
			transform: translateX(100%);
			transition: .2s all linear;
		}
		.header__nav_active {
			transform: translateX(0);
		}
		.header__list {
			gap: 3rem;
		}
		.header__link {
			font-size: 2.5rem;
		}
		.header__item {
			width: 100%;
		}
		.header__nav-close {
			width: 40px;
			height: 40px;
			position: absolute;
			top: 20px;
			right: 20px;
		}
		.header__nav-close-line {
			display: block;
			width: 100%;
			height: 2px;
			background-color: white;
			position: absolute;
			top: 50px;

		}
		.header__nav-close-line:first-child {
			transform: translateY(-50%) rotate(45deg);
		}
		.header__nav-close-line:last-child {
			transform: translateY(-50%) rotate(-45deg);
		}
		.header__wrapper {
			padding-top: 20px;
		}
	}
</style>