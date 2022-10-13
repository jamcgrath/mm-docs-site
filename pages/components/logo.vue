<template>
	<div class="">
		<mm-logo></mm-logo>
		<mm-logo width="200px" fill="red"></mm-logo>
		<hr />
		<mm-logo-mark></mm-logo-mark>
		<mm-logo-mark width="25px" fill="orange"></mm-logo-mark>
	</div>
</template>

<script>
	import MmLogo from '~/components/mm-components/logo/MmLogo.vue'
	import MmLogoMark from '~/components/mm-components/logo/MmLogoMark.vue'
	export default {
		layout: 'layout-components',
		components: {
			MmLogo,
			MmLogoMark,
		},
	}
</script>

<style>
</style>