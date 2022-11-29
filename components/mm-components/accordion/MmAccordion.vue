<template>
	<div class="w-100">
		<button
			:aria-expanded="`${isOpen}`"
			class="
				accordion-trigger
				w-100
				title-6_semibold
				flex
				j-content-between
				a-items-center
				navy
			"
			:aria-controls="panelId"
			:id="buttonId"
			@click="toggle"
		>
			<slot name="title">
				{{ title }}
			</slot>

			<i
				aria-hidden="true"
				:class="`mmi mmi-${isOpen ? 'minus' : 'plus'}-incircle`"
			></i>
		</button>
		<div
			:id="panelId"
			role="region"
			:aria-labelledby="buttonId"
			class="body pt-4 gray-7"
			:class="{
				hidden: !isOpen,
			}"
			:aria-hidden="`${!isOpen}`"
		>
			<slot name="content">
				Pulvinar consequat eget bibendum morbi hac sit est, elit. Quis nisi
				tellus vestibulum tempus.
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				default:
					'Phasellus commodo adipiscing tellus felis, mattis purus scelerisque aliquet.',
			},
			initialOpen: {
				default: false,
			},
		},
		data() {
			return {
				buttonId: null,
				panelId: null,
				isOpen: this.initialOpen || false,
			}
		},
		methods: {
			toggle() {
				this.isOpen = !this.isOpen
			},
		},
		mounted() {
			this.buttonId = this.$nanoid()
			this.panelId = this.$nanoid()
		},
	}
</script>

<style scoped>
	.accordion-trigger:focus {
		outline: 2px solid currentColor;
		outline-offset: 2px;
		border-radius: 4px;
	}
</style>