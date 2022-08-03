<template>
	<section class="places">
		<wide-wrapper>
			<div class="places__caption">
				<h2 class="places__title section-title">Get inspired for your next trip</h2>
				<a href="" class="places__view-all">VIEW ALL</a>
			</div>
			<div class="places__cards">
				<place-card size="card_size_lg" caption="Mount Fuji"></place-card>
				<place-card size="card_size_lg" caption="Kyoto"></place-card>
				<place-card size="card_size_sm" caption="Tokyo"></place-card>
				<place-card size="card_size_sm" caption="Niigata"></place-card>
				<place-card size="card_size_sm" caption="Sapporo"></place-card>
			</div>
		</wide-wrapper>
	</section>
</template>

<script>
	import PlaceCard from "@/components/PlaceCard";
	export default {
		name: "ThePlaces",
		components: {
			PlaceCard
		}
	}
</script>

<style scoped>
	.places__title {

	}
	.places__caption {
		margin-bottom: 36px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.places__view-all {
		display: inline-block;
		padding-right: 60px;
		font-size: 1rem;
		text-transform: uppercase;
		text-decoration: none;
		color: #006DFE;
		background: url("../assets/arrow-icon.svg") no-repeat 95% center;
		transition: 0.2s;
	}
	.places__view-all:hover,
	.places__view-all:focus {
		background: url("../assets/arrow-icon.svg") no-repeat right center;
	}
	.places__cards {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 10px;
	}
</style>