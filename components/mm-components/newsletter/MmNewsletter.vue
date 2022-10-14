<template>
	<div class="flex flex-col grape-bg">
    <img src="https://picsum.photos/350/150" class="img" />
    <div>
      <div class="flex title-bar grape-10-bg">
        <div class="flex-1">title</div>
        <button>+</button>
      </div>
      <div>frequency</div>
      <div>description</div>
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			value: {
				type: Number,
			},
			pages: {
				type: Number,
				deafult: 0,
			},
		},
		watch: {
			model(newVal) {
				this.$emit('input', newVal)
			},
		},
		data() {
			return {
				model: this.value || 1,
			}
		},
		computed: {
		},
		methods: {},
	}
</script>

<style>
.img {
  height: 65.7px;
  width: 100%;
  object-fit: cover;
}
</style>