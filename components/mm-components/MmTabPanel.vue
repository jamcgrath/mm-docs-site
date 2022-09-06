<template>
	<div
		class="tab-panel mt-3"
		role="tabpanel"
		tabindex="-1"
		:aria-labelledby="`tab-${$attrs.id}`"
	>
		<slot></slot>
	</div>
</template>