<template>
	<div class="input-page">
		<mm-input
			type="text"
			name="test"
			:id="$nanoid()"
			label="lable for text"
			placeholder="label"
		/>
	</div>
</template>
<script>
	import MmInput from '~/components/mm-components/inputs/MmInput.vue'
	export default {
		components: { MmInput },
	}
</script>