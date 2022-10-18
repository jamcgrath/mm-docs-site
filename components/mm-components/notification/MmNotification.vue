<template>
	<div role="link" tabindex="0" class="notification flex p-4 cursor-pointer" :class="{ 'grape-10-bg': !read, 'gray-1-bg': read }" @click="$emit('click')">
		<div class="logo br-12 flex mr-4">
      <img v-if="image" class="logo br-12" :src="image">
      <i v-else aria-hidden="true" :class="icon"></i>
    </div>
    <div class="flex-1 flex-col flex">
      <div class="title-message">
        <span class="label_med navy-dark medium title-message">{{ label }}</span>
        <span class="label gray-6 regular title-message">{{ subLabel }}</span>
      </div>
      <div class="flex gray-5 mr-5 a-items-center overline-small time">
        {{ time }}
      </div>
    </div>
    <button type="button" class="btn btn-sm btn-circle menu a-self-end" aria-label="menu" @click.stop="$emit('menuClick')">
      <i aria-hidden="true" class="mmi mmi-menu-horizontal-lite gray-5"></i>
      <v-slot name="menuContent"></v-slot>
    </button>
	</div>
</template>

<script>
	export default {
		props: {
			icon: {
        type: String,
        default: 'mmi mmi-podcast m-auto'
      },
      image: {
        type: String,
      },
      label: {
        type: String,
        default: 'Mamamia Out Loud'
      },
      subLabel: {
        type: String,
        default: 'new episode: Episode Title'
      },
      time: {
        type: String,
        default: '2 hours ago'
      },
      read: {
        type: Boolean
      }

		},
    data () {
      return {
      }
    },
		mounted() {
		},
		computed: {
		},
		methods: {
		},
	}
</script>

<style scoped>
.menu {
  background-color: none;
}
.msg {
  flex-grow: 1;
  margin-bottom: auto;
}

.notification {
  width: 375px;
  height: 85px;
}

.logo {
  position: relative;
  min-width: 52px;
  min-height: 52px;
  background-color: var(--white);
  object-fit: cover;
}

.title-message {
  line-height: 17.5px !important;
  font-size: 14px !important;
}

.time {
  font-size: 9px;
  font-weight: 600;
  line-height: 9px;
  letter-spacing: 1px;
  min-height: 24px;
}


</style>