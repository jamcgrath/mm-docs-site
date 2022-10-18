<template>
	<div class="flex p-4 navy-dark-bg gray-4 br-8" aria-live="assertive" aria-atomic="true">
		<div v-if="type" class="mr-3" >
			<i aria-hidden="true" :class="`mmi ${icon}`"></i>
		</div>
		<div class="flex-1">
			<div class="caption_med">{{ title }}</div>
			<div v-if="body" class="small">{{ body }}</div>
		</div>
		<div class="flex a-items-center">
			<button v-if="button" type="button" class="btn btn-flat-secondary btn-sm"
				@click="$emit('buttonClick')"
			>
				{{ button }}
			</button>
			<button v-if="!noClose" type="button" class="btn btn-flat-primary btn-sm btn-circle ml-2" aria-label="Close"
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
			// icon: String,
			type: String,
			title: {
				type: String,
				required: true
			},
			body: String,
			button: String,
			noClose: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
		},
		computed: {
			icon () {
				const type = this.type
				return {
					success: 'mmi-check-circle-filled',
					error: 'mmi-multiply-incircle-filled',
					info: 'mmi-information-filled',
					warning: 'mmi-warning-filled'
				}[type] + ' ' + type
			}
		},
		methods: {
    }
	}
</script>

<style scoped>
.close {

}
</style>
