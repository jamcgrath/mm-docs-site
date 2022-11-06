<template>
    <div role="link" class="mm-notification flex p-4" :class="getBackgroundColor">
        <div class="mm-notification-display flex mr-4" v-if="checkIfImageOrIcon === 'icon'" :class="getBorderRadius">
            <i aria-hidden="true" class="m-auto mmi" :class="value.display"></i>
        </div>
        <img v-if="checkIfImageOrIcon === 'image'" alt="" :src="value.display" class="mm-notification-display flex mr-4"
            :class="getBorderRadius" :style="{ 'background-color': 'var(--gray-4)' }" />
        <div class="flex flex-1 flex-col">
            <a :href="value.link" class="mm-notification-title label gray-6 regular" v-html="titleValue"
                @click="$emit('click', value)"></a>
            <div class="flex a-items-center gray-5 overline-small_semibold">
                <div class="flex-1">{{ value.time }}</div>
                <button class="btn btn-sm btn-circle a-self-end relative" :class="getBackgroundColor" aria-label="menu"
                    @click.stop="$emit('menu')">
                    <i aria-hidden="true" class="mmi mmi-menu-horizontal-lite gray-5" @click.stop="$emit('menu')"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'notification'
        },
        format: {
            type: String,
            default: 'podcast'
        },
        value: {
            type: Object,
            default() {
                return {
                    display: 'mmi-podcast',
                    title: 'sit amet, consectetur adipiscing elit.',
                    name: 'Lorem ipsum',
                    time: '2 hours ago',
                    link: '#',
                    read: false
                }
            }
        }
    },
    computed: {
        titleValue() {
            const type = this.type.toLowerCase()
            const format = this.format.toLowerCase()
            const value = this.value
            if (type === 'notification') {
                if (format === 'podcast') return `<span class="label_med navy-dark">${value.name}</span> new episode: ${value.title}`
                return `<span class="label_med navy-dark">${value.name}</span>: ${value.title}`
            } else if (type === 'author') {
                let label = {
                    article: 'article by',
                    podcast: 'podcast with',
                    video: 'video featuring'
                }
                return `New ${label[format]} <span class="label_med navy-dark">${value.name}</span>: ${value.title}`
            } else if (type === 'subscriber') {
                let label = {
                    article: 'article by',
                    podcast: 'episode of',
                }
                if (format === 'video') return `New subscriber exclusive video: <span class="label_med navy-dark">${value.title}</span>`
                return `New subscriber exclusive ${label[format]} <span class="label_med navy-dark">${value.name}</span>: ${value.title}`
            } else {
                return `<span class="label_med navy-dark">${value.name}</span>: ${value.title}`
            }
        },
        checkIfImageOrIcon() {
            if (!this.value.display || this.value.display.substring(0, 3) === 'mmi') return 'icon'
            return 'image'
        },
        getBorderRadius() {
            const type = this.type.toLowerCase()
            const format = this.format.toLowerCase()
            if ((type === 'notification' && format === 'podcast') ||
                (type === 'subscriber' && (format === 'podcast' || format === 'video'))) return 'br-12'
            return 'br-100'
        },
        getBackgroundColor() {
            return this.value.read ? 'gray-2-bg' : 'grape-10-bg'
        }
    }
}
</script>
<style scoped>
.mm-notification {
    position: relative;
    width: 100%;
    min-height: 85px;
}

.mm-notification-display {
    position: relative;
    width: 52px;
    height: 52px;
    background-color: var(--white);
    object-fit: cover;
}

.mm-notification-title {
    line-height: 18px;
    max-height: 60px;
    overflow: hidden;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}


.mm-notification .mm-notification-title::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>