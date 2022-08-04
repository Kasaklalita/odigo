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
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, impedit, veniam, vero, numquam architecto nostrum deleniti sequi atque iste dignissimos ducimus iure? Natus voluptatem, earum sit error facilis, inventore?'
					},
					{
						reversed: true,
						title: 'Featured Neighborhood: Kyoto’s Arashiyama',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero architecto aliquam quasi aliquid, nostrum culpa optio quibusdam itaque voluptatum maiores harum, corrupti eos minima ullam ipsam impedit, cupiditate debitis suscipit.'
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