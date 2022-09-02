<template>
	<div class="docs-table">
		<table class="table-auto border-collapse">
			<thead>
				<tr class="text-left">
					<th class="px-4 py-2">Class</th>
					<th>Props</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(rules, index) in cssStyles"
					:key="index"
					class="v-align-baseline"
				>
					<td>
						<button
							class="
								color-value
								w-100
								p-4
								cursor-pointer
								flex-1
								border-0
								text-left
								flex
								a-items-center
								bg-transparent
							"
							@click="$copyToClipboard(rules[0])"
						>
							{{ rules[0] }} <span class="copy-msg">copied</span>
						</button>
					</td>
					<td>
						<ul class="list-reset">
							<li
								v-for="(value, prop, index) in rules[1]"
								:key="`${prop}-${index}`"
							>
								{{ $kebabCase(prop) }} : {{ checkValue(value) }}
							</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		props: ['filename'],
		computed: {
			cssStyles() {
				return this.$mapStyles(require(`~/mm-css/dist/json/${this.filename}`))
			},
		},
		methods: {
			checkValue(value) {
				// if there are vendor prefixes the rule is an array then
				// get the last value of the array which is un-prefixed
				return Array.isArray(value) ? value[value.length - 1] : value
			},
		},
	}
</script>

<style>
	.docs-table {
		font-family: monospace;
	}

	.docs-table tr {
		border-bottom: 1px solid var(--bc-primary);
	}
</style>