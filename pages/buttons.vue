<template>
	<div class="button-test">
		<mm-tabs>
			<mm-tab-panel id="btn-docs-1" tab-name="Usage" :selected="true">
				<div class="markdown" v-html="markdown"></div>
			</mm-tab-panel>
			<mm-tab-panel id="btn-docs-2" tab-name="Buttons">
				<p class="body mt-3">
					Click to copy the button element. Shift + click to copy the button
					class.
				</p>
				<div class="button-edit mt-5">
					<div>
						<label for="buttonText">Button Text</label>
						<input
							type="text"
							id="buttonText"
							name="buttonText"
							v-model.trim="buttonText"
						/>
						<label for="buttonIcon">Icon</label>
						<input
							type="text"
							id="buttonIcon"
							name="buttonIcon"
							v-model.trim.lazy="buttonIcon"
						/>
					</div>
				</div>

				<div class="button-section mt-3 grid gap-10">
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Primary</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-primary btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">tonal</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-lg"
								>
									{{ buttonText || ' large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || ' large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-lg"
								>
									{{ buttonText || ' large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-med"
								>
									{{ buttonText || ' medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || ' medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-med"
								>
									{{ buttonText || ' medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-sm"
								>
									{{ buttonText || ' small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || ' small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-sm"
								>
									{{ buttonText || ' small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Outline</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">flat</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Secondary</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-secondary btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Secondary tonal</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-tonal-secondary btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Secondary Outline</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-secondary btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Secondary flat</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-secondary btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Destructive</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-destructive btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-destructive btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-destructive btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-destructive btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Destructive outline</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-outline-destructive btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-outline-destructive btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline-destructive btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-outline-destructive btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Destructive flat</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-lg"
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-lg"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-lg"
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-flat-destructive btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-med"
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-med"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-med"
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-flat-destructive btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-sm"
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-sm"
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat-destructive btn-sm"
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									 @click="copyButton" type="button"
									class="btn btn-flat-destructive btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Disabled</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-lg"
									disabled
								>
									{{ buttonText || ' large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-lg"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || ' large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-lg"
									disabled
								>
									{{ buttonText || ' large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-lg btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-med"
									disabled
								>
									{{ buttonText || ' medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-med"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || ' medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-med"
									disabled
								>
									{{ buttonText || ' medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-med btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-sm"
									disabled
								>
									{{ buttonText || ' small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-sm"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || ' small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-sm"
									disabled
								>
									{{ buttonText || ' small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-sm btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Disabled Outline</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg"
									disabled
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg"
									disabled
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-lg btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-med" disabled>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-med" disabled>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-med" disabled>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-med btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm"
									disabled
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm"
									disabled
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-outline btn-sm btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Disabled flat</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg"
									disabled
								>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'large' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg"
									disabled
								>
									{{ buttonText || 'large' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-lg btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med"
									disabled
								>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'medium' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med"
									disabled
								>
									{{ buttonText || 'medium' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-med btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm"
									disabled
								>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm"
									disabled
								>
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
									{{ buttonText || 'small' }}
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm"
									disabled
								>
									{{ buttonText || 'small' }}
									<i :class="['mmi', buttonIcon]" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									@click="copyButton"
									type="button"
									class="btn btn-flat btn-sm btn-circle"
									disabled
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</mm-tab-panel>
			<mm-tab-panel id="btn-docs-3" tab-name="Custom Buttons">
				<div class="markdown" v-html="btnCustomMD"></div>
			</mm-tab-panel>
			<mm-tab-panel id="btn-docs-4" tab-name="Buttons CSS">
				<docs-table :cssStyles="buttonStyles"></docs-table>
			</mm-tab-panel>
		</mm-tabs>
	</div>
</template>

<script>
	import MmToggleButton from '~/components/mm-components/toggle-button/MmToggleButton.vue'
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import DocsTable from '~/components/DocsTable.vue'
	import buttonStyles from '~/mm-css/dist/json/buttons.json'

	//prettier ignore
	export default {
		layout: 'layout-components',
		components: {
			MmToggleButton,
			MmTabs,
			MmTabPanel,
			DocsTable,
		},
		async asyncData({ $getMarkdown }) {
			const slug = 'buttons'
			const markdown = await $getMarkdown(slug)
			const btnCustomMD = await $getMarkdown('buttons-custom')
			return {
				slug,
				markdown,
				btnCustomMD,
			}
		},
		data() {
			return {
				buttonText: '',
				buttonIcon: 'mmi-multiply',
			}
		},
		computed: {
			buttonStyles() {
				return this.$mapStyles(buttonStyles)
			},
		},
		watch: {
			buttonIcon(newValue, oldValue) {
				if (!newValue) {
					this.buttonIcon = 'mmi-multiply'
				}
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
				if (this.buttonType === 'nuxt-link') {
					let outerHTML = cleanedNodeOuterHTML
				} else {
					this.$copyToClipboard(cleanedNode.outerHTML, false)
				}
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
							if (!this.buttonText) {
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
	.docs-button-list {
		display: grid;
		grid-template-columns: auto auto auto 1fr;
		gap: var(--space-2);
	}
	.button-section {
		--min: 415px;
		--gap: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap);
	}

	.button-section > * {
		flex: 1 1 var(--min);
	}

	.custom-button-1 {
		--btn-color: orange;
	}
	.custom-button-2 {
		--btn-color: var(--navy);
		--btn-bg: var(--citrus);
	}
	.custom-button-3 {
		--btn-color: var(--white);
		--btn-bg: var(--aqua-dark);
		--btn-border-color: var(--navy);
		--btn-border-style: dashed;
		--btn-border-width: 4px;
	}
</style>