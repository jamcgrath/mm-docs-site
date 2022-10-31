<template>
	<div
		class="tab-panel mt-3"
		:class="{ hidden: !isSelected }"
		role="tabpanel"
		tabindex="-1"
		:aria-labelledby="`tab-${$attrs.id}`"
	>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isSelected: null,
			}
		},
		mounted() {
			this.isSelected = this.$el.hasAttribute('selected')
			if (this.isSelected) {
				this.$el.removeAttribute('selected')
			}
		},
	}
</script>