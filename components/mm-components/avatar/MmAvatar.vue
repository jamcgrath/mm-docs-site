<template>
  <div class="circle avatar" :style="{ ...style, fontSize }" v-bind="$attrs" v-on="$listeners">
    <span v-if="!imageLoaded && initials">
        {{ initials.slice(0, 2) }}
    </span>
    <i v-else-if="anonymous && !src" aria-hidden="true" class="mmi mmi-anonymous"></i>
    <img v-bind="$attrs" v-on="$listeners" :style="style" class="circle" v-show="imageLoaded && src" :src="src" @error="imageLoaded = false" @load="imageLoaded = true" />
  </div>
</template>

<script>
export default {
  props: {
    initials: {},
    anonymous: {},
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