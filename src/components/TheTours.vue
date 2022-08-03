<template>
	<div class="tours">
		<wide-wrapper>
			<div class="tours__wrap">
				<tour-card></tour-card>
			</div>
		</wide-wrapper>
	</div>
</template>

<script>
	import TourCard from "@/components/TourCard";
	export default {
		name: "TheTours",
		components: {
			TourCard
		}
	}
</script>

<style scoped>

</style>