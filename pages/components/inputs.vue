<template>
	<div class="input-page">
		<mm-input
			name="testtext"
			label="Text input"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="text"
		>
		</mm-input>
		<mm-input
			name="testtext"
			label="Text input disabled"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="text"
			disabled
		></mm-input>
		<mm-input
			name="testtext"
			label="Text input readonly"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="text"
			readonly
		>
		</mm-input>
		<mm-input
			name="testtext"
			label="Text input success"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="text"
			inputState="success"
		>
		</mm-input>
		<mm-input
			name="testtext"
			label="Text input error"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="text"
			inputState="error"
			errorMessage="Yo there was an error! "
		>
		</mm-input>
		<mm-input
			name="testcolor"
			label="color browser default"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="color"
		>
		</mm-input>
		<mm-input
			name="testdate"
			label="date browser default"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="date"
		>
		</mm-input>
		<mm-input
			name="testemail"
			label="email no validation"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="email"
		>
		</mm-input>
		<mm-input
			name="testpassword"
			label="password no validation"
			placeholder="label"
			class="test mt-8"
			:showLabel="true"
			v-model="text"
			type="password"
		>
		</mm-input>
	</div>
</template>
<script>
	import MmInput from '~/components/mm-components/inputs/MmInput.vue'
	export default {
		components: { MmInput },
		data() {
			return {
				test: '',
				text: 'this is some text',
			}
		},
	}
</script>
<style>
	.test .mm-input-input::placeholder {
		/* --input-placeholder-color: red; */
	}
</style>