<template>
	<div class="videos">
		<div class="videos__wrapper">
			<div class="video__item"></div>
			<iframe class="video__element" src="https://www.youtube.com/embed/G5RpJwCJDqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TheVideo"
	}
</script>

<style scoped>
	.videos {
		width: 100%;
	}
	.videos__wrapper {
		max-width: 1440px;
		margin: 0 auto;
		position: relative;
	}
	.video__item {
		padding-top: 56.25%;
	}
	.video__element {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>