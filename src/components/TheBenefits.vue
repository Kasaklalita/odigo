<template>
	<section class="benefits">
		<div class="benefits__wrap">
			<h2 class="benefits__title">Benefits of Odigo</h2>
			<div class="benefits__cards">
				<benefits-card
					v-for="benefit in benefits"
					:key="benefit['title']"
					:benefit="benefit"></benefits-card>
			</div>
		</div>
	</section>
</template>

<script>
	import BenefitsCard from "@/components/BenefitsCard";
	export default {
		name: "TheBenefits",
		components: {
			BenefitsCard
		},
		data() {
			return {
				benefits: [
					{
						title: 'Welcome to Odigo!',
						description: 'Jump off balcony, onto stranger\'s head. Chase ball of string hide when guests come over.',
						imageUrl: '../assets/church-icon.svg'
					},
					{
						title: 'Your Personal Japan Guide',
						description: 'Jump off balcony, onto stranger\'s head. Chase ball of string hide when guests come over.',
						imageUrl: '../assets/person-icon.svg'
					},
					{
						title: 'Promoting Local Businesses',
						description: 'Jump off balcony, onto stranger\'s head. Chase ball of string hide when guests come over.',
						imageUrl: '../assets/building-icon.svg'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.benefits__wrap {
		max-width: 1262px;
		background-color: white;
		margin: 0 auto;
		box-shadow: 0 2px 20px rgba(21, 24, 36, 0.15993);
		position: relative;
	}
	.benefits__title {
		width: 100%;
		font-weight: 500;
		font-size: 2.1rem;
		padding: 90px 100px 88px 100px;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-99%);
		background-color: white;
	}
	.benefits__cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 55px;
		padding: 0 100px;
	}
</style>