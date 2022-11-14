<template>
	<div class="mm-stepper" role="group">
		<button
			class="stepper-btn btn btn-circle btn-outline"
			@click="stepDown()"
			:disabled="disabled"
			:aria-label="`${stepCount} step${stepCountPlural} down`"
			tabindex="-1"
		>
			<i aria-hidden="true" class="mmi mmi-minus"></i>
		</button>

		<input
			ref="input"
			:disabled="disabled"
			type="number"
			:value="value"
			@input="$emit('input', $event.target.valueAsNumber)"
			:aria-valuenow="value"
			tabindex="0"
			:placeholder="min || 0"
			:max="max"
			:min="min"
			:aria-valuemin="min"
			:aria-valuemax="max"
			:step="stepCount"
			:aria-label="ariaLabel"
			class="stepper-input text-center border border-solid m-1 br-12 input"
		/>

		<button
			class="stepper-btn btn size-32 btn-circle btn-outline"
			@click="stepUp()"
			:disabled="disabled"
			:aria-label="`${stepCount} step${stepCountPlural} up`"
			tabindex="-1"
		>
			<i aria-hidden="true" class="mmi mmi-plus"></i>
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
			},
			disabled: {
				type: Boolean,
			},
			min: {
				type: String,
			},
			max: {
				type: String,
			},
			stepCount: {
				type: String,
				default: 1,
			},
			ariaLabel: {
				type: String,
			},
		},
		mounted() {
			this.$refs.input.value = this.min
		},
		computed: {
			stepCountPlural() {
				return this.stepCount > 1 ? 's' : ''
			},
		},
		methods: {
			stepUp() {
				this.$refs.input.stepUp()
				this.$emit('input', this.$refs.input.valueAsNumber)
			},
			stepDown() {
				this.$refs.input.stepDown()
				this.$emit('input', this.$refs.input.valueAsNumber)
			},
			select() {
				this.$refs.input.select()
			},
		},
	}
</script>

<style scoped>
	/* Chrome, Safari, Edge, Opera */
	.input::-webkit-outer-spin-button,
	.input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	.input[type='number'] {
		width: 86px;
		height: 46px;
		-moz-appearance: textfield;
		border-style: solid;
		border-color: var(--gray-4);
		color: var(--gray-6);
	}

	.stepper-input:hover {
		border-color: var(--navy);
	}

	.stepper-input:focus {
		color: var(--navy);
		border: 1px solid var(--navy-dark);
		outline-width: 0;
	}

	.stepper-input:disabled {
		border-color: var(--gray-6);
	}

	.stepper-iput:valid {
		border: 1px solid var(--success);
	}

	.stepper-input:invalid {
		border: 1px solid var(--error);
	}

	.stepper-btn:active {
		--btn-bg: var(--navy-light);
	}

	.stepper-btn:disabled {
		--btn-color: var(--gray-6);
		--btn-bg: var(--gray-3);
	}

	.stepper-btn {
		border-width: 1px;
		border-color: var(--gray-4);
		width: 32px;
		height: 32px;
	}
	.stepper-btn .mmi {
		--mm-top-safari: -3px;
	}
</style>