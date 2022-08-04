<template>
	<div class="card">
		<div class="card__pic">
<!--			<img src="../assets/top-1.jpg" alt="" class="card__thumb">-->
			<div class="card__stats">
				<h3 class="card__title">{{item['title']}}</h3>
				<div class="card__likes">
					<span class="card__likes-value">{{item['likes']}}</span>
				</div>
				<div class="card__comments">
					<span class="card__comments-value">{{item['comments']}}</span>
				</div>
			</div>
		</div>
		<p class="card__description">{{item['description']}}</p>
		<a href="" class="card__more">SEE MORE</a>
	</div>
</template>

<script>
	export default {
		name: "TopCard",
		props: ['item']
	}
</script>

<style scoped>
	.card {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.card__pic {
		position: relative;
		background:url("../assets/top-1.jpg") no-repeat center;
		background-size: cover;
		height: 380px;
	}
	.card__thumb {
	}
	.card__stats {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background: rgba(21, 24, 36, 0.6);
		padding: 1rem 1.5rem;
	}
	.card__title {
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 1.5rem;
		color: white;
		margin: 0 auto 0 0;
	}
	.card__likes {
		font-weight: 500;
		color: white;
		line-height: 1.5rem;
		padding-right: 22px;
		background: url("../assets/heart-icon.svg") no-repeat right;
		margin-right: 15px;
	}
	.card__comments {
		font-weight: 500;
		color: white;
		line-height: 1.5rem;
		padding-right: 22px;
		background: url("../assets/comment-icon.svg") no-repeat right;
	}
	.card__description {
		line-height: 1.5rem;
	}
	.card__more {
		padding: 0.6rem 1.2rem;
		line-height: 1.5rem;
		background: #006DFE;
		align-self: flex-start;
		color: white;
		margin: auto auto 0 0;
	}
	.card__more:hover,
	.card__more:active,
	.card__more:focus{
		background-color: #0E66DA;
	}
</style>