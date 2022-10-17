<template>
	<label class="flex mm-checkbox">
		<input
			type="checkbox"
			class="
				mm-checkbox-input
				br-4
				relative
				border border-solid border-gray-6
				m-0
				white-bg
			"
			:disabled="disabled || false"
			:checked="checked || false"
			ref="mmCheckboxInput"
		/>
		<div class="mm-checkbox-icon flex j-content-center a-items-center absolute">
			<i
				class="mmi"
				:class="indeterminate ? ' mmi-minus' : 'mmi-check'"
				aria-hidden="true"
			></i>
		</div>
		<span :class="{ disabled: disabled, 'visually-hidden': !label }">{{
			label
		}}</span>
	</label>
</template>

<script>
	export default {
		props: {
			label: String,
			disabled: Boolean,
			indeterminate: Boolean,
			checked: Boolean,
		},
		mounted() {
			if (this.indeterminate) {
				this.$refs.mmCheckboxInput.indeterminate = this.indeterminate
			}
		},
	}
</script>

<style>
	.mm-checkbox {
		display: grid;
		grid-template-columns: 1em auto;
		gap: 8px;
	}
	.mm-checkbox-input[type='checkbox'] {
		-webkit-appearance: none;
		appearance: none;
		width: 1.25em;
		height: 1.25em;
	}
	.mm-checkbox-icon {
		height: 1.25em;
		width: 1.25em;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
	}
	.mm-checkbox-icon .mmi-check,
	.mm-checkbox-icon .mmi-minus {
		font-size: 0.75em;
		color: var(--white);
	}
	.mm-checkbox-input[type='checkbox']:checked ~ .mm-checkbox-icon,
	.mm-checkbox-input[type='checkbox']:indeterminate ~ .mm-checkbox-icon {
		transform: scale(1);
		background-color: var(--grape);
		border-radius: var(--space-1);
	}
	.mm-checkbox-input[type='checkbox']:focus-visible {
		outline: max(2px, 0.15em) solid currentColor;
		outline-offset: max(2px, 0.15em);
	}
	.mm-checkbox-input[type='checkbox']:disabled,
	.mm-checkbox-input[type='checkbox']:disabled ~ .mm-checkbox-icon {
		color: var(--gray-6);
		cursor: not-allowed;
		background: var(--gray-3);
		border: 1px solid var(--gray-6);
	}
	.mm-checkbox-input[type='checkbox']:disabled ~ .mm-checkbox-icon .mmi-check {
		color: currentcolor;
	}
	.disabled {
		color: var((--gray-6));
	}
</style>