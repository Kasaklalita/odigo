<template>
	<div class="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "TheWrapper"
	}
</script>

<style scoped>
	.wrapper {
		max-width: 1060px;
		margin: 0 auto;
	}
</style>