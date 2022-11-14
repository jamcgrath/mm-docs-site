<template>
	<div>
		<label
			:for="id || inputId"
			class="label_reg"
			:class="[
				{ 'visually-hidden': !showLabel },
				showLabel && labelClasses ? 'labelClasses' : '',
			]"
		>
			{{ label }}
		</label>
		<div class="mm-input grid a-items-center gap-2 br-12 py-2 px-3">
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
				:type="type"
				:name="name"
				:id="id || inputId"
				class="mm-input-input border-0 label"
				:placeholder="placeholder"
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
		<div class="mm-input-error caption_med error mt-1">Error Message</div>
	</div>
</template>

<script>
	export default {
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
			type: String,
			name: String,
			id: String,
			placeholder: String,
			leadIcon: {
				type: [String, Boolean],
				default: 'mmi-thunder',
			},
			trailingIcon: {
				type: [String, Boolean],
				default: 'mmi-ey-close',
			},
		},
		data() {
			return {
				inputId: '',
			}
		},
		mounted() {
			if (!this.id) {
				this.inputId = this.$nanoid()
			}
		},
	}
</script>

<style scoped>
	.mm-input {
		--input-border-color: var(--gray-4);
		--input-bg: var(--white);
		--input-color: var(--navy-dark);
		--input-placeholder-color: var(--gray-7);
		--input-grid-cols: auto 1fr auto;

		border: 1px solid var(--input-border-color);
		background: var(--input-bg);
		color: var(--input-color);
		grid-template-columns: var(--input-grid-cols);
	}
	.mm-input-input::placeholder {
		font-size: inherit;
		color: var(--input-placeholder-color);
	}
	.mm-input-input:focus {
		outline: 0;
	}
	.mm-input .mmi {
		color: var(--gray-7);
	}
</style>