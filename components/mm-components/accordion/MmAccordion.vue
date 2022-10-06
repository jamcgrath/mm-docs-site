<template>
  <div>
    <button type="button"
      :aria-expanded="isOpen"
      class="accordion-trigger grape-bg"
      :aria-controls="panelId"
      :id="buttonId"
      @click="toggle"
    >
      <div class="accordion-title title-6_semibold flex j-content-between">
        <div class="flex-1">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        
        <div class="flex-1">
          <i aria-hidden="true" :class="`mmi mmi-${ isOpen ? 'minus' : 'plus' }-incircle`"></i>
        </div>
      </div>
    </button>
    <div :id="panelId"
      role="region"
      :aria-labelledby="buttonId"
      class="body"
      :class="{
        hidden: !isOpen
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Title'
    },
    initialOpen: {
      default: false
    }
  },
  data () {
    return {
      buttonId: this.$nanoid(),
      panelId: this.$nanoid(),
      isOpen: this.initialOpen || false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>