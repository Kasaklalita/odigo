<template>
	<div class="benefits__card">
		<div class="benefits__card-pic">
			<img src="../assets/church-icon.svg" alt="" class="benefits__card-thumb">
		</div>
		<h3 class="benefits__card-title">{{benefit['title']}}</h3>
		<p class="benefits__card-desc">{{benefit['description']}}</p>
		<a href="" class="benefits__card-more">LEARN MORE</a>
	</div>
</template>

<script>
	export default {
		name: "BenefitsCard",
		props: ['benefit']
	}
</script>

<style scoped>
	.benefits__card {
		grid-column: span 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 110px;
	}
	.benefits__card-thumb {
		display: block;
	}
	.benefits__card-title {
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
	.benefits__card-desc {
		font-size: 1.1rem;
		line-height: 1.5rem;
	}
	.benefits__card-more {
		align-self: flex-start;
		display: inline-block;
		padding-right: 60px;
		font-size: 1rem;
		text-transform: uppercase;
		text-decoration: none;
		color: #006DFE;
		background: url("../assets/arrow-icon.svg") no-repeat 95% center;
		transition: 0.2s;
	}
	.benefits__card-more:hover,
	.benefits__card-more:focus {
		background: url("../assets/arrow-icon.svg") no-repeat right center;
	}
</style>