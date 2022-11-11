<template>
	<div>
		<label
			:for="id || randomId"
			:class="[
				{ 'visually-hidden': !showLabel },
				classNames && showLabel ? classNames : 'mm-textarea-label',
			]"
			ref="textareaLabel"
			>{{ label }}</label
		>
		<textarea
			:id="id || randomId"
			class="mm-textarea label br-12"
			:class="{ 'resize-none': !resize }"
			:form="form"
			:placeholder="placeHolder"
			:required="required"
			:disabled="disabled"
			:readonly="readonly"
			:minlength="minlength"
			:maxlength="maxlength"
			:autocomplete="autocomplete"
			:spellcheck="spellcheck"
			:value="value"
			:name="name"
			@input="$emit('input', $event.target.value)"
			:data-valid="valid"
		></textarea>
	</div>
</template>
<script>
	export default {
		props: {
			id: String,
			showLabel: {
				type: Boolean,
				default: false,
			},
			classNames: String,
			value: String,
			form: String,
			label: {
				type: String,
				required: true,
			},
			placeHolder: String,
			minlength: [Number, String],
			maxlength: [Number, String],
			autocomplete: {
				//off or on
				type: String,
				default: 'off',
			},
			spellcheck: {
				type: [Boolean, String],
				default: 'default',
			},
			required: {
				type: Boolean,
				default: false,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			readonly: {
				type: Boolean,
				default: false,
			},
			resize: {
				type: Boolean,
				default: true,
			},
			name: String,
			valid: {
				// Success, Error
				type: String,
				default: '',
			},
		},
		data() {
			return {
				randomId: null,
			}
		},
		mounted() {
			if (!this.id) {
				this.randomId = this.$nanoid()
			}
		},
	}
</script>
<style scoped>
	/* if classNames prop is present .mm-textarea-label will not exist. .
		mm-textarea-label's purpose is for custom styling of a label
	*/
	.mm-textarea-label {
		color: var(--textarea-label-color);
		font-size: var(--textarea-label-fs);
		font-weight: var(--textarea-label-fw);
		padding: var(--textarea-label-padding);
		margin: var(--textarea-label-margin);
		letter-spacing: var(--textarea-label-ls);
		line-height: var(--textarea-lh);
	}

	.mm-textarea {
		--textarea-max-width: auto;
		--textarea-min-height: 120px;
		--textarea-border-color: var(--gray-4);
		--textarea-color: var(--navy-dark);
		width: 100%;
		max-width: var(--textarea-max-width);
		min-height: var(--textarea-min-height);
		color: var(--textarea-color);
		border: 1px solid var(--textarea-border-color);
		padding: var(--space-3) var(--space-4) 0 var(--space-4);
	}

	.mm-textarea:hover {
		--textarea-border-color: var(--navy-hover);
	}

	.mm-textarea:focus,
	.mm-textarea:active {
		outline: none;
		--textarea-border-color: var(--gray-4);
	}

	.mm-textarea:disabled {
		color: var(--gray-6) !important;
		background: var(--gray-4) !important;
	}

	[disabled].mm-textarea:hover {
		--textarea-border-color: transparent !important;
	}

	[data-state='success'].mm-textarea {
		--textarea-border-color: var(--success);
	}

	[data-state='error'].mm-textarea {
		--textarea-border-color: var(--error);
	}
</style>
