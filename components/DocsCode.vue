<template>
	<div class="code-preview overflow-auto relative">
		<pre
			class="m-0"
			v-for="(example, index) in codeExample"
			:key="index"
			@click="$copyToClipboard(example.code)"
		>
						<code v-highlight="example.code" :class="`language-${example.language}`"></code>
					</pre>
	</div>
</template>

<script>
	export default {
		props: {
			codeExample: Object,
		},
	}
</script>

<style>
</style>
