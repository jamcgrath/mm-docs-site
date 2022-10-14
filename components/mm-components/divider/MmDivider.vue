<template>
    <div role="divider" :class="getClass(styledLine)"></div>
</template>

<script>
export default {
    props: {
        styledLine: {
            type: String,
            default: 'thin'
        }
    },
    methods: {
        getClass(value) {
            if (value === '2lines') return 'two_lines'

            return value
        }
    }
}
</script>

<style scoped>
.thin {
    border-top: 1px solid var(--gray-3);
}

.bold {
    border-top: 2px solid var(--gray-3);
}

.dotted {
    border-top: 7.57px dotted var(--grape-light);
}

.two_lines,
.wavey,
.zigzag {
    width: 100%;
    height: 11px;
    background-repeat: repeat-x;
}

.two_lines {
    background-image: url('./images/2lines.png');
}

.wavey {
    background-image: url('./images/wavey.png');
}

.zigzag {
    background-image: url('./images/zigzag.png');
}
</style>
