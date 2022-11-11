<template>
	<div>
		<mm-textarea
			id="txt1"
			class="mb-4"
			label="Label"
			:showLabel="true"
			classNames="citrus title-1"
			placeHolder="place holder for textarea"
		></mm-textarea>
		<mm-textarea class="mb-4" label="Label" required></mm-textarea>
		<mm-textarea class="mb-4" label="Label" disabled></mm-textarea>
		<mm-textarea
			class="mb-4 test"
			:showLabel="true"
			label="Label"
			:resize="false"
		></mm-textarea>
		<mm-textarea
			class="mb-4"
			label="Label"
			:resize="false"
			required
		></mm-textarea>
		<mm-textarea
			class="mb-4"
			label="Label"
			:resize="false"
			disabled
		></mm-textarea>
	</div>
</template>

<script>
	import MmTextarea from '~/components/mm-components/textarea/MmTextarea.vue'

	export default {
		layout: 'layout-components',
		components: {
			MmTextarea,
		},
	}
</script>
<style>
	.test .mm-textarea-label {
		--textarea-label-color: red;
	}
</style>