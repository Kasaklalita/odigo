<template>
	<div v-if="!tour['reversed']" class="tour">
		<div class="tour__pic">
			<img src="../assets/tour-1.jpg" alt="" class="tour__thumb">
		</div>
		<div class="tour__info">
			<h3 class="tour__title">{{tour['title']}}</h3>
			<p class="tour__description">{{tour['description']}}</p>
			<see-more-link to="" content="VIEW PREFECTURE"></see-more-link>
		</div>
	</div>
	<div v-else class="tour">
		<div class="tour__info">
			<h3 class="tour__title">{{tour['title']}}</h3>
			<p class="tour__description">{{tour['description']}}</p>
			<see-more-link to="" content="VIEW PREFECTURE"></see-more-link>
		</div>
		<div class="tour__pic">
			<img src="../assets/tour-1.jpg" alt="" class="tour__thumb">
		</div>
	</div>
</template>

<script>
	export default {
		name: "TourCard",
		props: ['tour']
	}
</script>

<style scoped>
	.tour {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 6.75rem;
		align-items: center;
	}
	.tour__info {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		padding: 0 2rem;
	}
	.tour__title {
		font-weight: 500;
		font-size: 1.8rem;
		line-height: 40px;
	}
	.tour__description {
		line-height: 1.5rem;
	}
</style>