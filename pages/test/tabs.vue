<template>
	<mm-tabs>
		<mm-tab-panel id="tab-panel-1" tab-name="tab-1" selected="true">
			tab 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
			aliquid doloremque fugiat ullam blanditiis recusandae debitis iure beatae
			repellat illo provident, harum tempora maxime eaque numquam. Fugit, quia
			recusandae!
		</mm-tab-panel>
		<mm-tab-panel id="tab-panel-2" tab-name="tab-2">
			tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
			aliquid doloremque fugiat ullam blanditiis recusandae debitis iure beatae
			repellat illo provident, harum tempora maxime eaque numquam. Fugit, quia
			recusandae!
		</mm-tab-panel>
	</mm-tabs>
</template>

<script>
	import MmTabs from '~/components/mm-components/MmTabs.vue'
	import MmTab from '~/components/mm-components/MmTab.vue'
	import MmTabPanel from '~/components/mm-components/MmTabPanel.vue'
	export default {
		components: {
			MmTabs,
			MmTab,
			MmTabPanel,
		},
		data() {
			return {}
		},
		methods: {},
	}
</script>

<style>
</style>