<template>
	<div class="tours">
		<wide-wrapper>
			<div class="tours__wrap">
				<tour-card
					v-for="tour in tours"
					:key="tour.title"
					:tour="tour"></tour-card>
			</div>
		</wide-wrapper>
	</div>
</template>

<script>
	import TourCard from "@/components/TourCard";
	export default {
		name: "TheTours",
		components: {
			TourCard
		},
		data() {
			return {
				tours: [
					{
						reversed: false,
						title: 'Prefecture in Focus: Tottori',
						description: 'Jump off balcony, onto stranger\'s head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, '
					},
					{
						reversed: true,
						title: 'Featured Neighborhood: Kyoto’s Arashiyama',
						description: 'Jump off balcony, onto stranger\'s head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, '
					},
				]
			}
		}
	}
</script>

<style scoped>
	.tours__wrap {
		display: flex;
		flex-direction: column;
		gap: 75px;
	}
</style>