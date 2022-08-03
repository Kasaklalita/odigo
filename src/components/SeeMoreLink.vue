<template>
	<a :href="to" class="link">{{content}}</a>
</template>

<script>
	export default {
		name: "SeeMoreLink",
		props: [
			'content',
			'to'
		]
	}
</script>

<style scoped>
	.link {
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
	.link:hover,
	.link:focus {
		background: url("../assets/arrow-icon.svg") no-repeat right center;
	}
</style>