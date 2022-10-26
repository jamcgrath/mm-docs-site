<template>
	<div class="button-test">
		<mm-tabs>
			<mm-tab-panel id="btn-docs-1" tab-name="Usage" selected="true">
				<div class="markdown" v-html="markdown"></div>
			</mm-tab-panel>
			<mm-tab-panel id="btn-docs-2" tab-name="Buttons">
				<div class="mt-3">
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">default</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button type="button" class="btn btn-primary btn-lg">
									primary large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>primary large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-lg">
									primary large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-lg btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-med">
									primary medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>primary medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-med">
									primary medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-primary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-sm">
									primary small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>primary small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-sm">
									primary small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-primary btn-sm btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">tonal</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button type="button" class="btn btn-tonal btn-lg">
									tonal large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>tonal large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-lg">
									tonal large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-lg btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-med">
									tonal medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>tonal medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-med">
									tonal medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-med btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-sm">
									tonal small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>tonal small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-sm">
									tonal small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal btn-sm btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Outline</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button type="button" class="btn btn-outline btn-lg">
									outline large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>outline large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-lg">
									outline large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-lg btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-med">
									outline medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>outline medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-med">
									outline medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-sm">
									outline small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>outline small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-sm">
									outline small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline btn-sm btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">flat</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button type="button" class="btn btn-flat btn-lg">
									flat large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>flat large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-lg">
									flat large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-lg btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-med">
									flat medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>flat medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-med">
									flat medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-med btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-sm">
									flat small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>flat small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-sm">
									flat small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat btn-sm btn-circle">
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Secondary</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button type="button" class="btn btn-secondary btn-lg">
									secondary large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>secondary large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-lg">
									secondary large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-med">
									secondary medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>secondary medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-med">
									secondary medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-sm">
									secondary small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>secondary small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-secondary btn-sm">
									secondary small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
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
								<button type="button" class="btn btn-tonal-secondary btn-lg">
									tonal secondary large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>tonal secondary large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-lg">
									tonal secondary large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-tonal-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-med">
									tonal secondary medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>tonal secondary medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-med">
									tonal secondary medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-tonal-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-sm">
									tonal secondary small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>tonal secondary small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-tonal-secondary btn-sm">
									tonal secondary small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
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
								<button type="button" class="btn btn-outline-secondary btn-lg">
									outline secondary large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>outline secondary large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-lg">
									outline secondary large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-med">
									outline secondary medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>outline secondary medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-med">
									outline secondary medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-sm">
									outline secondary small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>outline secondary small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-outline-secondary btn-sm">
									outline secondary small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
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
								<button type="button" class="btn btn-flat-secondary btn-lg">
									flat secondary large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>flat secondary large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-lg">
									flat secondary large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-flat-secondary btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-med">
									flat secondary medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>flat secondary medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-med">
									flat secondary medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-flat-secondary btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-sm">
									flat secondary small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>flat secondary small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-secondary btn-sm">
									flat secondary small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<button
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
								<button type="button" class="btn btn-destructive btn-lg">
									destructive large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-lg">
									destructive large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-destructive btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-med">
									destructive medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-med">
									destructive medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-destructive btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-sm">
									destructive small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-destructive btn-sm">
									destructive small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
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
									type="button"
									class="btn btn-outline-destructive btn-lg"
								>
									destructive outline large
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-lg"
								>
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive outline large</span>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-lg"
								>
									destructive outline large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-outline-destructive btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-med"
								>
									destructive outline medium
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-med"
								>
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive outline medium</span>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-med"
								>
									destructive outline medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-outline-destructive btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-sm"
								>
									destructive outline small
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-sm"
								>
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive outline small</span>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn btn-outline-destructive btn-sm"
								>
									destructive outline small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-outline-destructive btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
						</ul>
					</div>
					<div class="m-5 border-b-2 solid border-navy pb-4">
						<h3 class="mb-3">Destructive flate</h3>
						<ul class="docs-button-list list-reset mt-3">
							<li>
								<button type="button" class="btn btn-flat-destructive btn-lg">
									destructive flat large
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-lg">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive flat large</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-lg">
									destructive flat large
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-flat-destructive btn-lg btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-med">
									destructive flat medium
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-med">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive flat medium</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-med">
									destructive flat medium
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-flat-destructive btn-med btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-sm">
									destructive flat small
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-sm">
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
									<span>destructive flat small</span>
								</button>
							</li>
							<li>
								<button type="button" class="btn btn-flat-destructive btn-sm">
									destructive flat small
									<i class="mmi mmi-multiply" aria-hidden="true"></i>
								</button>
							</li>
							<li>
								<!-- <button
									type="button"
									class="btn btn-flat-destructive btn-sm btn-circle"
								>
									<i class="mmi mmi-close" aria-hidden="true"></i>
								</button> -->
							</li>
						</ul>
					</div>
					<div class="mt-3">
						<div class="m-5 border-b-2 solid border-navy pb-4">
							<h3 class="mb-3">Disabled</h3>
							<ul class="docs-button-list list-reset mt-3">
								<li>
									<button type="button" class="btn btn-lg" disabled>
										disabled large
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-lg" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled large</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-lg" disabled>
										disabled large
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-lg btn-circle" disabled>
										<i class="mmi mmi-close" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-med" disabled>
										disabled medium
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-med" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled medium</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-med" disabled>
										disabled medium
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-med btn-circle" disabled>
										<i class="mmi mmi-close" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-sm" disabled>
										disabled small
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-sm" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled small</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-sm" disabled>
										disabled small
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-sm btn-circle" disabled>
										<i class="mmi mmi-close" aria-hidden="true"></i>
									</button>
								</li>
							</ul>
						</div>
						<div class="m-5 border-b-2 solid border-navy pb-4">
							<h3 class="mb-3">Disabled Outline</h3>
							<ul class="docs-button-list list-reset mt-3">
								<li>
									<button type="button" class="btn btn-outline btn-lg" disabled>
										disabled outline large
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-outline btn-lg" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>Button disbaled outline large</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-outline btn-lg" disabled>
										disabled outline large
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn btn-outline btn-lg btn-circle"
										disabled
									>
										<i class="mmi mmi-close" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn btn-outline btn-med"
										disabled
									>
										disabled outline medium
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn btn-outline btn-med"
										disabled
									>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled outline medium</span>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn btn-outline btn-med"
										disabled
									>
										disabled outline medium
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn btn-outline btn-med btn-circle"
										disabled
									>
										<i class="mmi mmi-close" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-outline btn-sm" disabled>
										disabled outline small
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-outline btn-sm" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled outline small</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-outline btn-sm" disabled>
										disabled outline small
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button
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
									<button type="button" class="btn btn-flat btn-lg" disabled>
										disabled flat large
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-lg" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled flat large</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-lg" disabled>
										disabled flat large
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn btn-flat btn-lg btn-circle"
										disabled
									>
										<i class="mmi mmi-close" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-med" disabled>
										disabled flat medium
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-med" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled flat medium</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-med" disabled>
										disabled flat medium
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn btn-flat btn-med btn-circle"
										disabled
									>
										<i class="mmi mmi-close" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-sm" disabled>
										disabled flat small
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-sm" disabled>
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
										<span>disabled flat small</span>
									</button>
								</li>
								<li>
									<button type="button" class="btn btn-flat btn-sm" disabled>
										disabled flat small
										<i class="mmi mmi-multiply" aria-hidden="true"></i>
									</button>
								</li>
								<li>
									<button
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
				</div>
			</mm-tab-panel>
		</mm-tabs>
		<!-- <div class="mt-3">
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
		</div> -->
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
		async asyncData({ $getMarkdown }) {
			const slug = 'buttons'
			const markdown = await $getMarkdown(slug)
			return {
				slug,
				markdown,
			}
		},
	}
</script>
<style scoped>
	.docs-button-list {
		display: grid;
		grid-template-columns: auto auto auto 1fr;
		gap: var(--space-2);
	}
</style>