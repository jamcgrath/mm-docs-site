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
					class="v-align-baseline my-3"
				>
					<td class="p-3">
						<mm-tooltip
							:id="$nanoid()"
							:tooltipText="tooltipText"
							align="top"
							:tooltipVisible="true"
						>
							<button
								class="
									btn
									p-4
									cursor-pointer
									flex-1
									border-0
									text-left
									flex
									a-items-center
									bg-transparent
								"
								@click="copyToClipboard(rules[0])"
							>
								{{ rules[0] }}
							</button>
						</mm-tooltip>
					</td>
					<td class="pb-3">
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
	import MmToolTip from '~/components/mm-components/tooltip/MmTooltip.vue'

	export default {
		components: { MmToolTip },
		props: ['cssStyles'],
		data() {
			return {
				defaultText: 'Click to copy',
				tooltipText: 'Click to copy',
			}
		},
		methods: {
			checkValue(value) {
				// if there are vendor prefixes the rule is an array.
				// get the last value of the array which is un-prefixed
				return Array.isArray(value) ? value[value.length - 1] : value
			},
			copyToClipboard(txt) {
				this.$copyToClipboard(txt)
				this.tooltipText = 'copied'
				setTimeout(() => (this.tooltipText = this.defaultText), 1000)
			},
		},
	}
</script>

<style>
	.docs-table {
		font-family: monospace;
	}

	.docs-table tr {
		border-bottom: 1px solid var(--aqua-light);
	}
</style>