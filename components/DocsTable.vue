<template>
	<div class="docs-table">
		<table>
			<thead>
				<tr>
					<th>Class</th>
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
				return Array.isArray(value) ? value[value.length - 1] : value
			},
		},
	}
</script>

<style>
	.docs-table {
		font-family: monospace;
	}
	.docs-table td {
		min-width: 300px;
	}
</style>