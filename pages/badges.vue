<template>
	<div class="component-test">
		<mm-tabs>
			<mm-tab-panel id="badge-docs-1" tab-name="Usage" :selected="true">
				<div class="markdown" v-html="markdown"></div>
			</mm-tab-panel>
			<mm-tab-panel id="badge-docs-2" tab-name="Badges">
				<div class="component-edit flex a-items-start">
						<div class="grid">
							<label class="label" for="badgeText">Badge Text</label>
							<input
								type="text"
								id="badgeText"
								name="badgeText"
								v-model.trim="badgeText"
							/>
						</div>
						<div class="grid ml-4">
							<label class="label" for="badgeIcon">Icon</label>
							<input type="text" id="badgeIcon" name="badgeIcon" v-model="badgeIcon">
						</div>
						<div class="grid ml-4">
							<div class="grid">
								<label class="label" for="badgeType">Element</label>
								<input
									type="text"
									id="badgeType"
									name="badgeType"
									v-model.lazy="badgeEl"
									placeholder="div span button a"
								/>
							</div>
							<p class="bold caption gray-7">div, span, a, button</p>
						</div>
				</div>
				<div class="component-section mt-3 grid gap-10 ">
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Default</h3>
						<ul class="docs-component-list list-reset mt-3">
							<li>
								<component
									:is="badgeEl"
									@click.prevent="copyButton"
									:href="badgeEl === 'a' ? '' : false"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-med"
								>
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component
									:is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' : false"
									:href="badgeEl === 'a' ? '' : false"
									class="badge badge-med"
								>
									
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component
								:href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-med"
								>
									{{ badgeText || 'medium' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl" :type="badgeEl === 'button' ? 'button' :  false" class="badge badge-med">
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-sm"
								>
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-sm"
								>
									
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-sm"
								>
									{{ badgeText || 'small' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-sm"
								>
									
								</component>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Success</h3>
						<ul class="docs-component-list list-reset mt-3">
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-med"
								>
									{{ badgeText || ' medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-med"
								>
									
									{{ badgeText || ' medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-med"
								>
									{{ badgeText || ' medium' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-med "
								>
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-sm"
								>
									{{ badgeText || ' small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-sm"
								>
									
									{{ badgeText || ' small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-sm"
								>
									{{ badgeText || ' small' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-success badge-sm"
								>
									
								</component>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Error</h3>
						<ul class="docs-component-list list-reset mt-3">
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-med"
								>
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-med"
								>
									
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-med"
								>
									{{ badgeText || 'medium' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-med "
								>
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-sm"
								>
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-sm"
								>
									
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-sm"
								>
									{{ badgeText || 'small' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-error badge-sm "
								>
									
								</component>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Alert</h3>
						<ul class="docs-component-list list-reset mt-3">
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-med"
								>
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-med"
								>
									
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-med"
								>
									{{ badgeText || 'medium' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-med "
								>
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-sm"
								>
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-sm"
								>
									
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-sm"
								>
									{{ badgeText || 'small' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-alert badge-sm"
								>
									
								</component>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Info</h3>
						<ul class="docs-component-list list-reset mt-3">
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-med"
								>
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-med"
								>
									
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-med"
								>
									{{ badgeText || 'medium' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-med "
								>
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-sm"
								>
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-sm"
								>
									
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-sm"
								>
									{{ badgeText || 'small' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-info badge-sm "
								>
									
								</component>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Warning</h3>
						<ul class="docs-component-list list-reset mt-3">
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-med"
								>
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-med"
								>
									
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-med"
								>
									{{ badgeText || 'medium' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-med "
								>
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-sm"
								>
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-sm"
								>
									
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-sm"
								>
									{{ badgeText || 'small' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-warning badge-sm"
								>
									
								</component>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Navy Dark</h3>
						<ul class="docs-component-list list-reset mt-3">
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-med"
								>
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-med"
								>
									
									{{ badgeText || 'medium' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-med"
								>
									{{ badgeText || 'medium' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-med "
								>
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-sm"
								>
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-sm"
								>
									
									{{ badgeText || 'small' }}
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									@click.prevent="copyButton"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-sm"
								>
									{{ badgeText || 'small' }}
									
								</component>
							</li>
							<li>
								<component :href="badgeEl === 'a' ? '' : false" :is="badgeEl"
									:type="badgeEl === 'button' ? 'button' :  false"
									class="badge badge-navy-dark badge-sm "
								>
									
								</component>
							</li>
						</ul>
					</div>
				</div>
			</mm-tab-panel>
			<!-- <mm-tab-panel id="badge-docs-3" tab-name="Custom Buttons">
				<div class="markdown" v-html="badgeCustomMD"></div>
			</mm-tab-panel> -->
			<mm-tab-panel id="badge-docs-4" tab-name="Badge CSS">
				<docs-table :cssStyles="componentStyles"></docs-table>
			</mm-tab-panel>
		</mm-tabs>
	</div>
</template>

<script>
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import DocsTable from '~/components/DocsTable.vue'
	import badgeStyles from '~/mm-css/dist/json/badges.json'

	//prettier ignore
	export default {
		components: {
			MmTabs,
			MmTabPanel,
			DocsTable,
		},
		async asyncData({ $getMarkdown }) {
			const slug = 'badges'
			const markdown = await $getMarkdown(slug)
			const badgeCustomMD = await $getMarkdown('buttons-custom')
			return {
				slug,
				markdown,
				badgeCustomMD,
			}
		},
		data() {
			return {
				badgeText: '',
				badgeIcon: 'mmi-multiply',
				badgeEl: 'span',
			}
		},
		computed: {
			componentStyles() {
				return this.$mapStyles(badgeStyles)
			},
		},
		methods: {
			copyButton(event) {
				// console.log(event.target.innerText)
				if (event.shiftKey) {
					return this.$copyToClipboard(event.target.classList.value)
				}

				const clone = event.target.cloneNode(true)
				const cleanedNode = this.cleanVueAttr(clone)
				this.$copyToClipboard(cleanedNode.outerHTML, false)
			},
			cleanVueAttr(node) {
				const vueData = 'data-v-'
				const vueAttr = node
					.getAttributeNames()
					.filter((attr) => attr.includes(vueData))
				node.removeAttribute(vueAttr)

				//remove data-v-* from child nodes and innertext
				if (node.hasChildNodes) {
					const nodeChildren = node.childNodes
					for (const child of nodeChildren) {
						if (child.nodeType === 1) {
							const childVueAttr = child
								.getAttributeNames()
								.filter((attr) => attr.includes(vueData))
							child.removeAttribute(childVueAttr)
						} else {
							//remove text node
							if (!this.badgeText) {
								node.removeChild(child)
							}
						}
					}
				}
				return node
			},
		},
	}
</script>
<style>
	.docs-component-list {
		display: grid;
		grid-template-columns: auto auto auto 1fr;
		gap: var(--space-2);
	}
	.component-section {
		--min: 415px;
		--gap: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap);
	}

	.component-section > * {
		flex: 1 1 var(--min);
	}
	.docs-component-list .badge {
		cursor: pointer;
	}
	.custom-component-1 {
		--badge-color: orange;
	}
	.custom-component-2 {
		--badge-color: var(--navy);
		--badge-bg: var(--citrus);
	}
	.custom-component-3 {
		--badge-color: var(--white);
		--badge-bg: var(--aqua-dark);
		--badge-border-color: var(--navy);
		--badge-border-style: dashed;
		--badge-border-width: 4px;
	}
</style>