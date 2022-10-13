
<template>
  <div class="mm-social-links-container">
    <mm-social-link class="mb-4" social="facebook" />
    <mm-social-link class="mb-4" social="twitter" />
    <mm-social-link class="mb-4" social="apple" />
    <mm-social-link class="mb-4" social="linkedin" />
    <mm-social-link class="mb-4" social="instagram" />
    <mm-social-link class="mb-4" social="tiktok" />
    <mm-social-link class="mb-4"  social="slack" />


  </div>
</template>
<script>
  import MmSocialLink from '~/components/mm-components/social-link/MmSocialLink.vue'
	export default {
		layout: 'layout-components',
    components: {
      MmSocialLink
    }
	}
</script>

<style scoped>
.mm-social-links-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:baseline;
}
</style>