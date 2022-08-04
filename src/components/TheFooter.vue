<template>
	<footer class="footer">
		<narrow-wrapper>
			<div class="footer__item">
				<div class="footer__logo">
					<img src="../assets/odigo-logo-footer.svg" alt="odigo-logo-footer" class="footer__logo-pic">
				</div>
				<nav class="footer__nav">
					<ul class="footer__menu">
						<li class="footer__menu-item">
							<h3 class="footer__menu-title">Company</h3>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">About</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Team</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Careers</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Privacy Policy</a>
						</li>
					</ul>
					<ul class="footer__menu">
						<li class="footer__menu-item">
							<h3 class="footer__menu-title">Locations</h3>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Tokyo</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Kyoto</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Osaka</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Hokkaido</a>
						</li>
					</ul>
					<ul class="footer__menu">
						<li class="footer__menu-item">
							<h3 class="footer__menu-title">Social Media</h3>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Facebook</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Twitter</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">Instagram</a>
						</li>
						<li class="footer__menu-item">
							<a href="" class="footer__menu-link">YouTube</a>
						</li>
					</ul>
				</nav>
			</div>
		</narrow-wrapper>
	</footer>
</template>

<script>
	export default {
		name: "TheFooter"
	}
</script>

<style scoped>
	.footer {
		background: #0E1D28;
		padding: 120px 0;
	}
	.footer__item {
		display: flex;
		flex-wrap: wrap;
	}
	.footer__logo {
		width: 50%;
	}
	.footer__nav {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.footer__menu {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		gap: 0.5rem;
	}
	.footer__menu-title {
		font-weight: 500;
		color: white;
		font-size: 1.1rem;
	}
	.footer__menu-link {
		color: white;
		text-decoration: none;
	}
	.footer__menu-link:hover,
	.footer__menu-link:focus,
	.footer__menu-link:active {
		opacity: 0.75;
	}

	@media screen and (max-width: 767px) {
		.footer__item {
			flex-direction: column;
			align-items: center;
			gap: 2rem;
		}
		.footer__logo {
			display: flex;
			justify-content: space-around;
		}
		.footer__nav {
			width: 90%;
		}
	}
</style>