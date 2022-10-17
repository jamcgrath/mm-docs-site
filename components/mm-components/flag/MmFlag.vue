<template>
	<div class="flex p-4 navy-dark-bg gray-4 br-8">
		<div v-if="icon" class="mr-3" >
			<i aria-hidden="true" :class="icon"></i>
		</div>
		<div class="flex-1">
			<div class="caption_med">{{ title || 'No title'}}</div>
			<div v-if="body" class="small">{{ body }}</div>
		</div>
		<div class="flex a-items-center">
			<button v-if="button || false" type="button" class="btn btn-flat-secondary btn-sm"
				@click="$emit('buttonClick')"
			>
				{{ button }}
			</button>
			<!-- <button type="button" class="btn btn-flat-secondary btn-sm btn-circle">
				<i aria-hidden="true" class="mmi mmi-close"></i>
			</button> -->
			<button v-if="hasClose || false" type="button" class="btn btn-flat-primary btn-sm btn-circle ml-2"
				@click="$emit('closeClick')"
			>
				<i aria-hidden="true" class="mmi mmi-close"></i>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			icon: String,
			title: String,
			body: String,
			button: String,
			hasClose: Boolean
		},
		mounted() {
		},
		computed: {
		},
		methods: {
    }
	}
</script>

<style scoped>
.close {

}
</style>
