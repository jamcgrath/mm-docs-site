<template>
  <div class="gutter">
    <MmNewsletter v-model="model" :pages="100" />
  </div>
</template>
<script>
  import MmNewsletter from '~/components/mm-components/newsletter/MmNewsletter.vue'
	export default {
		layout: 'layout-components',
    components: {
      MmNewsletter
    },
    data () {
      return {
      }
    }
	}
</script>

<style scoped>
.gutter {
  column-gap: 20px;
  row-gap: 20px;
}
</style>