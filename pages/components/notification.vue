<template>
	<div class="gutter">
		<MmNotification label="Trinmar Pogi" sub-label="ang pogi" @click="log('clicked notif')" @menuClick="log('menu')"/>
		<MmNotification read @click="log('clicked notif')" @menuClick="log('menu')" />
		<MmNotification v-model="model" disabled @click="log('clicked notif')" @menuClick="log('menu')" />
		<MmNotification label="Trinmar Pogi" sub-label="ang pogi" image="https://picsum.photos/200/300" @click="log('clicked notif')" @menuClick="log('menu')"/>
	</div>
</template>
<script>
	// import MmNotification from '~/components/mm-components/notification/MmNotification.vue'
	export default {
		layout: 'layout-components',
		components: {
			// MmNotification,
		},
		data() {
			return {
				log: console.log,
				test: 0,
				model: 0,
				modelStrict: 1,
			}
		},
	}
</script>

<style scoped>
	.gutter {
		column-gap: 20px;
		row-gap: 20px;
	}
</style>