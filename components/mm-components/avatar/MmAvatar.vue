<template>
  <div class="grape-bg size-64 circle" v-bind="$attrs" v-on="$listeners">
    <slot>
      <!-- <i v-show="!imageLoaded" aria-hidden="true" class="mmi mm-anonymous"></i> -->
      <!-- <span> -->
      <i v-show="!imageLoaded" aria-hidden="true" class="icon mmi mmi-anonymous"></i>
      <!-- </span> -->
    </slot>
    <img v-bind="$attrs" v-on="$listeners" class="size-64 circle" v-show="imageLoaded" src="https://i.pravatar.cc/300" @load="imageLoaded = true" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  },
  data () {
    return {
      imageLoaded: false
    }
  }
}
</script>

<style scoped>
.size-64 {
  width: 64px;
  height: 64px;
  font-size: 36px;
  text-align: center;
  line-height: 64px;
  vertical-align: middle;
}
.icon {
  position:relative;
  top: 10%;
  /* top:50%;
  left:50%; */
  /* transform:translate(-50%,-50%) */
}
</style>