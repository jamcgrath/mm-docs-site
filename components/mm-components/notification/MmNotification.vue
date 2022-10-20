<template>
	<div role="link" tabindex="0" class="notification flex p-4 cursor-pointer" :class="{ 'grape-10-bg': !read, 'gray-1-bg': read }" @click="$emit('click')">
		<div class="logo br-12 flex mr-4" :class="{ 'br-100': circle }">
      <img v-if="image" class="logo br-12" :class="{ 'br-100': circle }" :src="image">
      <i v-else aria-hidden="true" :class="icon"></i>
    </div>
    <div class="flex-1 flex-col flex">
      <div class="title-message label gray-6 regular">
        {{ preLabel }}
        <span class="label_med navy-dark medium title-message">{{ label }}</span>{{ removeSpaceColon }}{{ subLabel }}
      </div>
      <div class="flex gray-5 mr-1 a-items-center overline-small time">
        <div class="flex-1">{{ time }}</div>
        <button class="btn btn-sm btn-circle a-self-end menu"
          :style="{ 'background-color': read ? 'var(--gray-1)' : 'var(--grape-0)' }"
          aria-label="menu" @click.stop="$emit('menuClick')"
        >
          <i aria-hidden="true" class="mmi mmi-menu-horizontal-lite gray-5"></i>
          <!-- <v-slot name="menuContent"></v-slot> -->
        </button>
      </div>
    </div>
    
	</div>
</template>

<script>
	export default {
		props: {
      circle: Boolean,
			icon: {
        type: String,
        default: 'mmi mmi-podcast m-auto'
      },
      image: {
        type: String,
      },
      preLabel: {
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
      subLabel2: {
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
      removeSpaceColon () {
        return this.subLabel.charAt(0) === ':' ? '' : ' '
      }
		},
		methods: {
		},
	}
</script>

<style scoped>
.menu {
  /* background-color: none; */
  position: relative;
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