<template>
  <div class="circle avatar" :style="style" v-bind="$attrs" v-on="$listeners">
    <span v-show="!imageLoaded" :style="{ fontSize: fontSize }">
      <slot>
          <i aria-hidden="true" class="mmi mmi-anonymous"></i>
      </slot>
    </span>
    <img v-bind="$attrs" v-on="$listeners" :style="style" class="circle" v-show="imageLoaded && src" :src="src" @load="imageLoaded = true" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    size: {
      default: '64px'
    },
    fontSize: {
      // default: '32px'
    }
  },
  data () {
    return {
      imageLoaded: false
    }
  },
  computed: {
    style () {
      return {
        width: this.size,
        height: this.size,
        'line-height': this.size
      }
    }
  }
}
</script>

<style scoped>
.avatar {
  text-align: center;
  vertical-align: middle;
  align-items: center;
  display: inline-block;
}
</style>