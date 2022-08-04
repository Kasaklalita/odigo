<template>
	<section class="top">
		<wide-wrapper>
			<div class="top-places__caption">
				<h2 class="top-places__title section-title">Today top places to visit</h2>
				<see-more-link to="#" content="VIEW ALL" style="align-self: flex-end;"></see-more-link>
			</div>
			<div class="top__cards">
				<top-card
					v-for="place in places"
					:key="place['title']"
					:item="place"></top-card>
			</div>
		</wide-wrapper>
	</section>
</template>

<script>
	import TopCard from "@/components/TopCard";
	export default {
		name: "TheTopPlaces",
		components: {
			TopCard
		},
		data() {
			return {
				places: [
					{
						title: 'NAGOYA',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						likes: 221,
						comments: 55
					},
					{
						title: 'NIIGATA',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sit esse iusto, dolorum aliquam modi autem sed repellendus quaerat voluptate perspiciatis alias. Molestiae eum enim, a nihil sunt, deleniti eos.',
						likes: 145,
						comments: 67
					},
					{
						title: 'OSAKA',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam odio harum repellendus voluptas praesentium, voluptatibus ipsum nisi at, esse quidem, reiciendis.',
						likes: 684,
						comments: 34
					},
					{
						title: 'SAITAMA',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci asperiores corporis quasi! Ea cumque natus, aliquam aspernatur. Totam tenetur hic fugit eius libero quam et sit ipsa ab enim!',
						likes: 124,
						comments: 43
					},
					{
						title: 'UENO',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis dignissimos sed. Molestiae corporis eos labore repellat a dolores necessitatibus nemo minus est, iusto itaque excepturi aliquid expedita distinctio quia.',
						likes: 341,
						comments: 67
					},
					{
						title: 'SHIBUYA',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, omnis tempore! Fugit, alias assumenda sint. Molestiae, reiciendis iure id recusandae, a perferendis sequi laborum autem magnam voluptas omnis, quas delectus.',
						likes: 151,
						comments: 48
					},
				]
			}
		}
	}
</script>

<style scoped>
	.top-places__caption {
		margin-bottom: 36px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.top {

	}
	.top__cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	@media screen and (max-width: 767px) {
		.top__cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (max-width: 400px) {
		.top__cards {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>