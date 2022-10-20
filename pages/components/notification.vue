<template>
	<div class="gutter">
		<MmNotification
			label="Mamamia Out Loud"
			sub-label="new episode: The episode title goes here"
			@click="log('clicked notif')" @menuClick="log('menu')"/>
		<MmNotification read @click="log('clicked notif')" @menuClick="log('menu')" />
		<MmNotification v-model="model" disabled @click="log('clicked notif')" @menuClick="log('menu')" />
		<MmNotification
			preLabel="New subscriber exclusive episode of"
			label="Mamamia Out Loud"
			sub-label=": The episode title goes here"
			image="https://picsum.photos/200/300"
			@click="log('clicked notif')" @menuClick="log('menu')"/>
		<MmNotification
			image="https://picsum.photos/201/300"
			preLabel="New video featuring" label="Author Name" subLabel=": Video title"
			circle
		/>
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