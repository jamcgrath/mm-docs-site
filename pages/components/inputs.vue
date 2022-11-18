<template>
	<div class="input-page">
		<mm-input
			name="test"
			label="label for text"
			placeholder="label"
			class="test"
			:showLabel="true"
			v-model="text"
			type="text"
		>
		</mm-input>
	</div>
</template>
<script>
	import MmInput from '~/components/mm-components/inputs/MmInput.vue'
	export default {
		components: { MmInput },
		data() {
			return {
				test: '',
				text: 'this is some text',
			}
		},
	}
</script>
<style>
	.test .mm-input-input::placeholder {
		/* --input-placeholder-color: red; */
	}
</style>