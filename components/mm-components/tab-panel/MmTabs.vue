<template>
	<div class="c-mm-tabs" v-show="tabs.length">
		<div
			role="tablist"
			class="tabs-list flex overflow-x-auto hide-scroll"
			ref="tablist"
		>
			<button
				v-for="(tab, index) in tabs"
				:key="index"
				:id="`tab-${tab.id}`"
				class="tabs-list-button label gray-7 cursor-pointer br-0"
				type="button"
				role="tab"
				:aria-selected="selectedTab === tab.id || 'false'"
				:aria-controls="tab.id"
				:tabindex="selectedTab === tab.id ? 0 : -1"
				ref="tabButton"
				@keydown="focusNext(tab.id, index, $event)"
				@click="showTabPanel(tab.id)"
			>
				{{ tab['tab-name'] }}
			</button>
		</div>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [],
				keyCodes: [9, 35, 36, 37, 39],
				selectedTab: null,
			}
		},
		mounted() {
			this.tabs = this.$children.map((child) => {
				if (child.$attrs.selected) {
					this.selectedTab = child.$attrs.id
				}
				return child.$attrs
			})
		},
		methods: {
			showTabPanel(id) {
				document.getElementById(this.selectedTab).classList.add('hidden')
				document.getElementById(id).classList.remove('hidden')
				this.selectedTab = id
			},
			focusNext(id, i, e) {
				// keycodes: 9=tab|35=end|36=home|37=left|39=right|40=down
				const { keyCode } = e
				if (this.keyCodes.includes(keyCode)) {
					const tabButtons = this.$refs.tabButton
					const first = tabButtons[0]
					const last = tabButtons[tabButtons.length - 1]
					const current = tabButtons[i]
					let focusEl
					switch (keyCode) {
						case 35:
							focusEl = first
							break
						case 36:
							focusEl = last
							break
						case 37:
							if (current == first) {
								focusEl = last
							} else {
								focusEl = tabButtons[i - 1]
							}
							break
						case 39:
							if (current == last) {
								focusEl = first
							} else {
								focusEl = tabButtons[i + 1]
							}
							break
						case 9:
							focusEl = document.getElementById(id)
							break
					}
					e.stopPropagation()
					e.preventDefault()
					focusEl.focus()

					//don't show panel on focus on tab
					if (keyCode !== 9) {
						this.showTabPanel(focusEl.getAttribute('aria-controls'))
					}
				}
			},
		},
	}
</script>

<style scoped>
	.tab-list {
		scroll-snap-type: x mandatory;
	}
	.tabs-list-button {
		--_border-color: var(--tab-border-color, var(--gray-4));
		--_color: var(--tab-color, var(--gray-7));
		color: var(--_color);
		border-color: var(--_border-color);
		border-width: 0 0 2px 0;
		border-style: solid;
		background: none;
		padding: 0.4375rem;
		min-width: 86px;
		text-transform: capitalize;
		outline-offset: -6px;
		scroll-snap-align: start;
	}
	.tabs-list-button[aria-selected='true'] {
		--tab-border-color: var(--grape-dark);
		--tab-color: var(--gray-9);
	}
</style>