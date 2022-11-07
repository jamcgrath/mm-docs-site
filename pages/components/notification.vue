<template>
    <div style="width: 375px;">
        <mm-notification type="notification" format="podcast" @click="notif" @menu="menu"></mm-notification>
        <mm-notification type="subscriber" format="article" :value="{
            display: 'https://picsum.photos/201/300',
            title: 'The episode title goes here',
            name: 'Mamamia Out Loud',
            time: '2 hours ago',
            to: '#',
            read: true
        }" @click="notif" @menu="menu"></mm-notification>
        <mm-notification type="subscriber" format="podcast" :value="{
            display: 'https://picsum.photos/201/300',
            title: 'Dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pharetra felis eget cursus. Pellentesque ipsum massa, posuere ut tellus ac, luctus varius sapien. Nulla eget ligula sed elit tincidunt pulvinar. ',
            name: 'Lorem ipsum',
            time: '3 hours ago',
            to: '#',
            read: true
        }" @click="notif" @menu="menu"></mm-notification>
        <mm-notification type="subscriber" format="video" :value="{
            display: 'mmi-video',
            title: 'The episode title goes here',
            name: 'Mamamia Out Loud',
            time: '2 hours ago',
            to: '/components/notification',
            read: false
        }" @click="notif" @menu="menu"></mm-notification>
        <mm-notification type="author" format="video" @click="notif" @menu="menu"></mm-notification>
        <mm-notification type="author" format="article" @click="notif" @menu="menu"></mm-notification>
        <mm-notification type="author" format="podcast" @click="notif" @menu="menu"></mm-notification>
    </div>
</template>
<script>
import MmNotification from '~/components/mm-components/notification/MmNotification.vue';

export default {
    layout: 'layout-components',
    components: {
        MmNotification
    },
    methods: {
        notif(value) {
            value.read = true
        },
        menu() {
            alert('...')
        }
    },
}
</script>