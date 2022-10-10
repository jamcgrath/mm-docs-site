<template>
	<button type="button" :aria-pressed="`${ariaPressed}`" class="br-96">
		toggle Button
	</button>
</template>

<script>
	//props:size: med || lg ,theme: primary || secondary, toggle: Bool, shape: circle ||pill  }

	export default {
		props: {
			size: {
				type: String,
				default: 'med',
			},
			theme: {
				type: String,
				default: 'primary',
			},
			toggle: {
				type: Boolean,
				default: false,
			},
			shape: {
				type: String,
				default: 'pill',
			},
		},
		data() {
			return {
				ariaPressed: false,
			}
		},
		mounted() {
			this.ariaPressed = this.toggle
		},
		methods: {
			toggleState() {
				const className = `btn-toggle-${theme}`
				this.$el.classList.add(className)
				this.ariaPressed = !this.ariaPressed
				this.emit('clicked')
			},
		},
	}
</script>

<style>
	.br-96 {
		border-radius: 96px;
	}
</style>
<style>
	.btn-toggle {
		--btn-padding: var(--space-2) var(--space-3);
		padding: var(--btn-padding);
	}

	.btn-toggle-lg {
	}
	.btn-toggle-primary {
	}
	.btn-toggle-secondary {
	}
	.btn-toggle-primary[aria-pressed='true'] {
	}
	.btn-toggle-secondary[aria-pressed='true'] {
	}
</style>