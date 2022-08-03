<template>
	<header class="header">
		<the-wrapper>
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
		</the-wrapper>
	</header>
</template>

<script>
	export default {
		name: "TheHeader"
	}
</script>

<style scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
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