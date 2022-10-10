<template>
	<label class="mm-switch flex a-items-center">
		<slot></slot>
		<input
			class="mm-switch-input"
			:id="$nanoid()"
			type="checkbox"
			role="checkbox"
			:aria-checked="`${value}`"
			:checked="value"
			tabindex="0"
			:value="value"
			:disabled="disabled"
			@change="(val) => $emit('input', !value)"
		/>
		<span class="mm-switch-slider round br-100"></span>
	</label>
</template>

<script>
	export default {
		props: ['value', 'disabled', 'id'],
	}
</script>

<style scoped>
	.mm-switch {
		position: relative;
	}

	.mm-switch-input {
		opacity: 0;
	}

	.mm-switch-slider {
		position: relative;
		cursor: pointer;
		width: 42px;
		height: 24px;
		background-color: var(--gray-4);
		transition: 0.4s;
		display: inline-block;
	}

	.mm-switch-slider:before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		left: 2px;
		bottom: 2px;
		background-color: var(--white);
		transition: 0.4s;
	}

	.mm-switch-input:checked + .mm-switch-slider {
		background-color: var(--grape);
	}

	.mm-switch-input:disabled + .mm-switch-slider {
		background-color: var(--gray-6);
	}

	.mm-switch-input:checked + .mm-switch-slider:before {
		-webkit-transform: translateX(18px);
		-ms-transform: translateX(18px);
		transform: translateX(18px);
	}

	.mm-switch-slider.round:before {
		border-radius: 50%;
	}
</style>