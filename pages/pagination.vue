<template>
  <div class="gutter">
    <MmPagination v-model="model" :pages="100" />
  </div>
</template>
<script>
  import MmPagination from '~/components/mm-components/pagination/MmPagination.vue'
	export default {
		layout: 'layout-components',
    components: {
      MmPagination
    },
    data () {
      return {
        model: 0,
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