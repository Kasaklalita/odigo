<template>
	<figure :class="size" class="card">
		<img src="../assets/place-1.jpg" alt="" class="card__picture">
		<figcaption class="card__title">{{caption}}</figcaption>
		<a href="" class="card__link"></a>
	</figure>
</template>

<script>
	export default {
		name: "PlaceCard",
		props: ['size', 'caption']
	}
</script>

<style scoped>
	.card {
		position: relative;
		overflow: hidden;

	}
	.card:hover .card__picture{
		transform: scale(1.1);
	}
	.card::after {
		display: block;
		content: '';
		width: 100%;
		height: 100%;
		background-color: rgba(21, 24, 36, 0.4);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.card__title {
		font-size: 3rem;
		position: absolute;
		color: white;
		bottom: 27px;
		left: 30px;
		z-index: 3;
	}
	.card_size_lg {
		grid-column: span 3;
	}
	.card_size_sm {
		grid-column: span 2;
	}
	.card__picture {
		height: 350px;
		object-fit: cover;
		width: 100%;
		transition: 0.15s;
	}
	.card__link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 4;
	}

	@media screen and (max-width: 767px) {
		.card_size_lg {
			grid-column: span 4;
		}
		.card_size_sm {
			grid-column: span 2;
		}
		.card_size_sm:last-of-type {
			grid-column: span 4;
		}
	}
	@media screen and (max-width: 500px) {
		.card_size_lg {
			grid-column: span 1;
		}

		.card_size_sm {
			grid-column: span 1;
		}

		.card_size_sm:last-of-type {
			grid-column: span 1;
		}
	}
</style>