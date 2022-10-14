<template>
  <div class="gutter">
    <MmNewsletter :value="model" @select="log" />
    <MmNewsletter />
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
        // $log: console.log,
        model: {
          id: this.$nanoid(),
          title: 'Trinmar Pogi',
          frequency: 'Daily',
          description: 'Get across the stories women are talking about today.',
        }
      }
    },
    methods: {
      log (val) {
        console.log('selected: ' + val)
        // console.log(...attrs)
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