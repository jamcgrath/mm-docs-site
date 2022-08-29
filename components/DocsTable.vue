<template>
	<div class="docs-table">
		<table>
			<thead>
				<tr>
					<th>Class</th>
					<th>Props</th>
					<!-- <th>Value</th> -->
				</tr>
			</thead>
			<tbody>
				<tr v-for="(rules, index) in cssStyles" :key="index">
					<td>{{ rules[0] }}</td>
					<td>
						<ul class="list-reset">
							<li
								v-for="(value, prop, index) in rules[1]"
								:key="`${prop}-${index}`"
							>
								{{ prop }} : {{ value }}
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
	}
</script>

<style>
</style>