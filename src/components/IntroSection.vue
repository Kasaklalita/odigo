<template>
	<section class="intro">
		<narrow-wrapper>
			<h1 class="intro__title">
				Discover Amazing places in Japan
			</h1>
			<p class="intro__subtitle">
				Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
			</p>
			<form class="search-form">
				<fieldset class="search-form__wrap">
					<p class="search-form__info">
						<input name="user-like-to-do" type="text" class="search-form__field" placeholder="What would you like to do?">
						<input name="user-like-to-go" type="text" class="search-form__field" placeholder="Where would you like to go?">
						<button class="search-form__submit" type="submit">search</button>
					</p>
				</fieldset>
			</form>
		</narrow-wrapper>
	</section>
</template>

<script>
	export default {
		name: "IntroSection"
	}
</script>

<style scoped>
	.intro {
		min-height: 100vh;
		background: url("../assets/intro-bg.jpg") no-repeat center;
		background-size: cover;
		padding-top: 16.25rem;
	}
	.intro__title {
		font-weight: 500;
		color: white;
		font-size: 3.25rem;
		line-height: 3.75rem;
		max-width: 38.7rem;
		margin-bottom: 22px;
	}
	.intro__subtitle {
		color: white;
		line-height: 1.5rem;
		max-width: 550px;
		margin-bottom: 3.75rem;
	}
	.search-form__info {
		display: flex;
		flex-wrap: wrap;
	}
	.search-form__field {
		width: 300px;
		background: transparent url("../assets/circle-icon.svg") no-repeat left 6px;
		background-size: 20px;
		border: 0;
		border-bottom: 2px solid #fff;
		margin-right: 60px;
		padding-left: 43px;
		padding-bottom: 1.5rem;
		font-weight: 500;
		font-size: 1.1rem;
		color: #fff;
	}
	.search-form__field::placeholder {
		font-weight: 500;
		font-size: 1.1rem;
		color: #fff;
	}
	.search-form__submit {
		padding: 0.9rem 2.5rem;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1.5rem;
		color: white;
		background-color: #1B7DFF;
	}
	.search-form__submit:hover,
	.search-form__submit:focus,
	.search-form__submit:active {
		background-color: #0E66DA;
	}
</style>