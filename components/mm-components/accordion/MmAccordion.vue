<template>
  <div class=" w-100">
    <button type="button"
      :aria-expanded="isOpen"
      class="accordion-trigger w-100"
      :aria-controls="panelId"
      :id="buttonId"
      @click="toggle"
    >
      <div class="accordion-title title-6_semibold flex w-100 navy">
        <div class="flex-1" style="text-align: left;">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        
        <div class="pl-6">
          <i aria-hidden="true" :class="`mmi mmi-${ isOpen ? 'minus' : 'plus' }-incircle`"></i>
        </div>
      </div>
    </button>
    <div :id="panelId"
      role="region"
      :aria-labelledby="buttonId"
      class="body pt-4 gray-7"
      :class="{
        hidden: !isOpen
      }"
    >
      <slot>
        Pulvinar consequat eget bibendum morbi hac sit est, elit. Quis nisi tellus vestibulum tempus.
      </slot>
    </div>
    <div class="divider mt-6"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Phasellus commodo adipiscing tellus felis, mattis purus scelerisque aliquet.'
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

.min-300 {
  width: 100%;
  min-width: 300px;
}

.divider {
  /* Divider */

  /* Auto layout */
  height: 1px;

  /* width: auto; */

  /* Grey/Grey 3

  Disabled
  */
  background: #EBEBEB;

}
</style>