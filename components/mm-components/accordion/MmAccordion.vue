<template>
  <div>
    <h3>
      <button type="button"
        :aria-expanded="isOpen"
        class="accordion-trigger"
        :aria-controls="panelId"
        :id="buttonId"
        @click="toggle"
      >
        <span class="accordion-title">
          <slot name="title">
            {{ title }}
          </slot>
          <slot name="right">
            <i aria-hidden="true" :class="`mmi mmi-${ isOpen ? 'minus' : 'plus' }-incircle`"></i>
          </slot>
        </span>
      </button>
    </h3>
    <div :id="panelId"
      role="region"
      :aria-labelledby="buttonId"
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