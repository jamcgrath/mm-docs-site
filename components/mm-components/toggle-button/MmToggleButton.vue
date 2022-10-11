<template>
	<button
		class="btn-toggle br-96"
		:class="[
			`btn-toggle-${theme} btn-toggle-${size}`,
			round ? 'btn-circle' : '',
		]"
		type="button"
		:aria-pressed="`${ariaPressed}`"
		@click="toggleState"
	>
		<slot></slot>
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
			round: {
				type: Boolean,
				default: false,
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
				// const className = `btn-toggle-${this.theme}`
				// this.$el.classList.add(className)
				this.ariaPressed = !this.ariaPressed
				this.$emit('clicked')
			},
		},
	}
</script>

<style>
	.btn-toggle {
		--btn-padding: var(--space-2) var(--space-3);
		--btn-border-color: var(--gray-4);
		--btn-border: 1px solid var(--btn-border-color);
		--btn-fs: var(--caption);
		--btn-fw: var(--fw-5);
		--btn-gap: var(--space-1);
		--btn-color: var(--navy-dark);
		--btn-bg: transparent;
		--btn-justify: center;
		padding: var(--btn-padding);
		border: var(--btn-border);
		display: inline-flex;
		gap: var(--btn-gap);
		align-content: center;
		justify-content: var(--btn-justify);
	}
	.btn-toggle:focus-visible {
		--btn-focus-color: currentcolor;
		outline: 2px solid var(--btn-focus-color);
		outline-offset: 2px;
	}
	.btn-toggle-lg {
		--btn-padding: var(--space-3) var(--space-4);
	}
	.btn-toggle-primary[aria-pressed='true'] {
		--btn-bg: var(--navy-10);
		--btn-border-color: var(--navy);
	}
	.btn-toggle-secondary[aria-pressed='true'] {
		--btn-bg: var(--grape-light);
		--btn-border-color: var(--grape);
	}
	.btn-toggle-med.btn-circle {
		--btn-circle-width: 32px;
	}
	.btn-toggle-lg.btn-circle {
		--btn-circle-width: 40px;
	}
	.btn-toggle.btn-circle i {
		--btn-icon-top: 1px;
		position: relative;
		top: var(--btn-icon-top);
	}
</style>