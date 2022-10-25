<template>
	<div class="button-test">
		<mm-tabs>
			<mm-tab-panel id="btn-docs-1" tab-name="Buttons" selected="true">
				<p>
					Default button with no <code>.btn</code> class has minimal styling
				</p>
				<div class="mt-5">
					<button type="button">Default Button</button>
					<div class="btn">Default .btn</div>
				</div>

				<docs-code :codeExample="codeExample"></docs-code>
				<!-- <docs-code :codeExample="defaultButtonCode"></docs-code> -->
			</mm-tab-panel>
		</mm-tabs>
		<div class="mt-3"></div>
		<div class="mt-3">
			<h2>Toggle Button</h2>
			<mm-toggle-button theme="primary" :toggle="false"
				>Top Stories</mm-toggle-button
			>
			<mm-toggle-button theme="secondary" :toggle="true"
				>Top Stories</mm-toggle-button
			>
			<mm-toggle-button theme="primary" size="lg" :toggle="false"
				>Top Stories</mm-toggle-button
			>
			<mm-toggle-button theme="secondary" size="lg" :toggle="true"
				>Top Stories</mm-toggle-button
			>
			<mm-toggle-button theme="primary" :toggle="false" :round="true"
				><i aria-hidden="true" class="mmi mmi-close"></i
				><span class="visually-hidden">close</span></mm-toggle-button
			>
			<mm-toggle-button theme="secondary" :toggle="true" :round="true"
				><i aria-hidden="true" class="mmi mmi-close"></i
				><span class="visually-hidden">close</span></mm-toggle-button
			>
			<mm-toggle-button theme="primary" size="lg" :toggle="false" :round="true"
				><i aria-hidden="true" class="mmi mmi-close"></i
				><span class="visually-hidden">close</span></mm-toggle-button
			>
			<mm-toggle-button theme="secondary" size="lg" :toggle="true" :round="true"
				><i aria-hidden="true" class="mmi mmi-close"></i
				><span class="visually-hidden">close</span>
			</mm-toggle-button>
		</div>

		<div class="mt-3">
			<h2>Primary</h2>
			<button type="button" class="btn btn-primary btn-sm">
				Button primary small
			</button>
			<button type="button" class="btn btn-primary btn-med">
				Button primary medium
			</button>
			<button type="button" class="btn btn-primary btn-lg">
				Button primary large
			</button>
			<button type="button" class="btn btn-primary btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-primary btn-med btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-primary btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-primary btn-lg btn-circle" disabled>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-primary btn-lg" disabled>
				Button primary large
			</button>
			<button type="button" class="btn btn-tonal btn-sm">
				Button tonal small
			</button>
			<button type="button" class="btn btn-tonal btn-med">
				Button medium medium
			</button>
			<button type="button" class="btn btn-tonal btn-lg">
				Button large large
			</button>
			<button type="button" class="btn btn-tonal btn-lg" disabled>
				Button large large
			</button>
			<button type="button" class="btn btn-tonal btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-tonal btn-med btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-tonal btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-tonal btn-lg btn-circle" disabled>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-outline btn-sm">
				Button outline small
			</button>
			<button type="button" class="btn btn-outline btn-med">
				Button outline medium
			</button>
			<button type="button" class="btn btn-outline btn-lg">
				Button outline large</button
			><button type="button" class="btn btn-outline btn-lg" disabled>
				Button outline large
			</button>
			<button type="button" class="btn btn-outline btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-outline btn-med btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-outline btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-outline btn-lg btn-circle" disabled>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-flat btn-sm">
				Button flat small
			</button>
			<button type="button" class="btn btn-flat btn-med">
				Button flat med
			</button>
			<button type="button" class="btn btn-flat btn-lg">
				Button flat large
			</button>
			<button type="button" class="btn btn-flat btn-lg" disabled>
				Button flat large
			</button>

			<button type="button" class="btn btn-flat btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-flat btn-med btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-flat btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-flat btn-lg btn-circle" disabled>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
		</div>
		<div class="mt-3">
			<h2>Secondary</h2>
			<button type="button" class="btn btn-secondary btn-sm">
				Button Secondary small
			</button>
			<button type="button" class="btn btn-secondary btn-med">
				Button Secondary medium
			</button>
			<button type="button" class="btn btn-secondary btn-lg">
				Button Secondary large
			</button>
			<button type="button" class="btn btn-secondary btn-lg" disabled>
				Button Secondary large
			</button>
			<button type="button" class="btn btn-secondary btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-secondary btn-med btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-secondary btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button
				type="button"
				class="btn btn-secondary btn-lg btn-circle"
				disabled
			>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-tonal-secondary btn-sm">
				Button tonal secondary small
			</button>
			<button type="button" class="btn btn-tonal-secondary btn-med">
				Button tonal secondary medium
			</button>
			<button type="button" class="btn btn-tonal-secondary btn-lg">
				Button tonal secondary large
			</button>
			<button type="button" class="btn btn-tonal-secondary btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-tonal-secondary btn-med btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-tonal-secondary btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button
				type="button"
				class="btn btn-tonal-secondary btn-lg btn-circle"
				disabled
			>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-outline-secondary btn-sm">
				Button outline secondary small
			</button>
			<button type="button" class="btn btn-outline-secondary btn-med">
				Button outline secondary medium
			</button>
			<button type="button" class="btn btn-outline-secondary btn-lg">
				Button outline secondary large
			</button>
			<button type="button" class="btn btn-outline-secondary btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button
				type="button"
				class="btn btn-outline-secondary btn-med btn-circle"
			>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-outline-secondary btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button
				type="button"
				class="btn btn-outline-secondary btn-lg btn-circle"
				disabled
			>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-flat-secondary btn-sm">
				Button flat secondary small
			</button>
			<button type="button" class="btn btn-flat-secondary btn-med">
				Button flat secondary med
			</button>
			<button type="button" class="btn btn-flat-secondary btn-lg">
				Button flat secondary large
			</button>
			<button type="button" class="btn btn-flat-secondary btn-lg" disabled>
				Button flat secondary large
			</button>
			<button type="button" class="btn btn-flat-secondary btn-sm btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-flat-secondary btn-med btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button type="button" class="btn btn-flat-secondary btn-lg btn-circle">
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
			<button
				type="button"
				class="btn btn-flat-secondary btn-lg btn-circle"
				disabled
			>
				<i class="mmi mmi-close" aria-hidden="true"></i>
			</button>
		</div>
		<div class="mt-3">
			<h2>Destructive</h2>
			<button type="button" class="btn btn-destructive btn-sm">
				Button destructive small
			</button>
			<button type="button" class="btn btn-destructive btn-med">
				Button destructive medium
			</button>
			<button type="button" class="btn btn-destructive btn-lg">
				Button destructive large
			</button>
			<button type="button" class="btn btn-outline-destructive btn-sm">
				Button outline destructive small
			</button>
			<button type="button" class="btn btn-outline-destructive btn-med">
				Button outline destructive medium
			</button>
			<button type="button" class="btn btn-outline-destructive btn-lg">
				Button outline destructive large
			</button>
			<button type="button" class="btn btn-flat-destructive btn-sm">
				Button flat destructive small
			</button>
			<button type="button" class="btn btn-flat-destructive btn-med">
				Button flat destructive med
			</button>
			<button type="button" class="btn btn-flat-destructive btn-lg">
				Button flat destructive large
			</button>
		</div>
	</div>
</template>

<script>
	import MmToggleButton from '~/components/mm-components/toggle-button/MmToggleButton.vue'
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import DocsCode from '~/components/DocsCode.vue'

	//prettier ignore
	export default {
		layout: 'layout-components',
		components: {
			MmToggleButton,
			MmTabs,
			MmTabPanel,
			DocsCode,
		},
		data() {
			return {
				defaultButtonCode: [
					{
						code: `<button type="button">Default Button</button>\n<div role="button"\n class="btn"\n @click="clickHandler"\n @keyup.enter="clickHandler"\n @keyup.space="clickHandler" >Default .btn</div>`,
						language: 'HTML',
					},
				],
			}
		},
	}
</script>
