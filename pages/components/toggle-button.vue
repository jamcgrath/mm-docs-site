<template>
	<div class="button-section mt-3">
		<h2>Toggle Button</h2>
		<mm-toggle-button theme="primary" :toggle="false"
			>Top Stories</mm-toggle-button
		>
		<mm-toggle-button theme="secondary" :toggle="true"
			>Top Stories</mm-toggle-button
		>
		<mm-toggle-button theme="primary" size="lg" :toggle="false"
			>Top Stories</mm-toggle-button
		>
		<mm-toggle-button theme="secondary" size="lg" :toggle="true"
			>Top Stories</mm-toggle-button
		>
		<mm-toggle-button theme="primary" :toggle="false" :round="true"
			><i aria-hidden="true" class="mmi mmi-close"></i
			><span class="visually-hidden">close</span></mm-toggle-button
		>
		<mm-toggle-button theme="secondary" :toggle="true" :round="true"
			><i aria-hidden="true" class="mmi mmi-close"></i
			><span class="visually-hidden">close</span></mm-toggle-button
		>
		<mm-toggle-button theme="primary" size="lg" :toggle="false" :round="true"
			><i aria-hidden="true" class="mmi mmi-close"></i
			><span class="visually-hidden">close</span></mm-toggle-button
		>
		<mm-toggle-button theme="secondary" size="lg" :toggle="true" :round="true"
			><i aria-hidden="true" class="mmi mmi-close"></i
			><span class="visually-hidden">close</span>
		</mm-toggle-button>
	</div>
</template>

<script>
	import MmToggleButton from '~/components/mm-components/toggle-button/MmToggleButton.vue'
	export default {
		components: { MmToggleButton },
	}
</script>

<style>
</style>