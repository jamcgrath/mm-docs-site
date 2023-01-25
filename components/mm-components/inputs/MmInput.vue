<template>
	<div>
		<label
			:for="$attrs.id || inputId"
			class="label_reg navy-dark"
			:class="[
				{ 'visually-hidden': !showLabel },
				showLabel && labelClasses ? 'labelClasses' : '',
			]"
		>
			{{ label }}
		</label>
		<div
			class="mm-input grid a-items-center gap-2 br-12 py-2 px-3 mt-1"
			:data-state="currentState"
			v-bind="$attrs.readonly"
			ref="mmInputOuter"
		>
			<div class="mm-input-slot flex">
				<slot name="mm-input-lead">
					<i
						v-if="leadIcon"
						class="mmi"
						:class="leadIcon"
						aria-hidden="true"
					></i>
				</slot>
			</div>
			<input
				v-bind="$attrs"
				:id="$attrs.id || inputId"
				class="mm-input_input border-0 label"
				@focus="focusEl"
				@blur="unfocusEl"
				ref="mmInput"
				:value="value"
				@input="$emit('input', $event.target.value)"
				:inputmode="$attrs.inputmode || inputModeType"
			/>
			<div class="mm-input-slot flex">
				<slot name="mm-input-trailing">
					<i
						v-if="trailingIcon"
						class="mmi"
						:class="trailingIcon"
						aria-hidden="true"
					></i>
				</slot>
			</div>
		</div>
		<div
			v-if="currentState === 'error'"
			class="mm-input-error caption_med error mt-1"
		>
			{{ errorMessage }}
		</div>
	</div>
</template>

<script>
	export default {
		inheritAttrs: false,
		props: {
			showLabel: {
				type: Boolean,
				default: false,
			},
			label: {
				type: String,
				required: true,
			},
			labelClasses: {
				type: String,
				dedfault: '',
			},
			leadIcon: {
				type: [String, Boolean],
				default: 'mmi-thunder',
			},
			trailingIcon: {
				type: [String, Boolean],
				default: 'mmi-ey-close',
			},
			inputState: {
				type: String,
				validator: function (value) {
					return ['success', 'error'].includes(value)
				},
			},
			errorMessage: String,
			value: String,
			inputHint: {
				type: String,
				validator: function (value) {
					return ['text', 'numeric', 'tel', 'search', 'email', 'url'].includes(
						value
					)
				},
			},
		},
		data() {
			return {
				inputId: '',
			}
		},
		computed: {
			currentState() {
				if (this.$attrs.hasOwnProperty('disabled')) {
					return 'disabled'
				}
				if (this.$attrs.hasOwnProperty('readonly')) {
					return 'readonly'
				}
				return this.inputState
			},
			setLeadIcon() {
				return this.leadIcon
			},
			setTrailingIcon() {
				return this.trailingIcon
			},
			inputModeType() {
				if (this.$attrs.inputmode) {
					return
				}
				if (!this.inputHint) {
					if (this.$attrs.type === 'number') {
						return 'numeric'
					}
					return this.$attrs.type
				} else {
					return this.inputHint
				}
			},
		},
		methods: {
			focusEl() {
				this.$refs.mmInputOuter.classList.add('mm-input-focus')
			},
			unfocusEl() {
				this.$refs.mmInputOuter.classList.remove('mm-input-focus')
			},
		},

		mounted() {
			if (!this.$attrs.id) {
				this.inputId = this.$nanoid()
			}
		},
	}
</script>

<style scoped>
	.mm-input {
		--input-color: var(--navy-dark);
		--input-border-color: var(--gray-4);
		border: 2px solid var(--input-border-color);
		background: var(--input-bg, var(--white));
		color: var(--input-color);
		grid-template-columns: var(--input-grid-cols, auto 1fr auto);
		position: relative;
	}

	/* hover styles */
	.mm-input:hover {
		--input-border-color: var(--navy-hover);
	}

	/* focus styles */
	.mm-input_input:focus {
		outline: 0;
		--input-color: var(--navy-dark);
	}
	.mm-input-focus,
	.mm-input-focus:hover {
		--input-border-color: var(--navy-dark);
	}

	[data-state='readonly'].mm-input:hover,
	[data-state='readonly'].mm-input-focus {
		--input-border-color: var(--gray-4);
	}

	/* placeholder styles */
	.mm-input_input::placeholder {
		color: var(--gray-7);
	}
	.mm-input_input:focus::placeholder {
		color: var(--input-color);
	}

	/* error & success */
	[data-state='error'].mm-input {
		--input-border-color: var(--error);
	}
	[data-state='success'].mm-input {
		--input-border-color: var(--success);
	}

	/* disabled */
	[data-state='disabled'].mm-input {
		--input-border-color: var(--gray-4);
		--input-bg: var(--gray-3);
	}

	.mm-input .mmi {
		color: var(--input-icon-color, var(--gray-7));
	}
</style>