<template>
	<div class="wide-wrapper">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "WideWrapper"
	}
</script>

<style scoped>
	.wide-wrapper {
		max-width: 1260px;
		margin: 0 auto;
	}
</style>