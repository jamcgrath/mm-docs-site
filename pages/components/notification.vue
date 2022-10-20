<template>
	<div class="gutter">
		<MmNotification v-for="notif in notifications" :key="$nanoid()" :value="notif" ></MmNotification>
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
				notifications: [
					{
						media: {
							type: 'icon',
							data: 'mmi mmi-video'
						},
						highlight: 'Mamamia Out Loud',
						subLabel: 'new episode: The episode title goes here',
						time: '2 hours ago'
					},
					{
						highlight: 'Mamamia Out Loud',
						subLabel: 'new episode: The episode title goes here',
						time: '2 hours ago'
					},
					{
						media: {
							type: 'image',
							data: 'https://picsum.photos/201/300'
						},
						preLabel: 'New subscriber exclusive episode of',
						highlight: 'Mamamia Out Loud',
						subLabel: ': The episode title goes here',
						read: true,
						time: '2 hours ago'
					},
					{
						type: 'author',
						media: {
							type: 'image',
							data: 'https://picsum.photos/200/300'
						},
						preLabel: 'New video featuring',
						highlight: 'Author Name',
						subLabel: 'Video title',
						time: '2 hours ago'
					}
				]
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