<template>
    <div class="mm-post-it label" :class="classes" :style="styles">{{ label }}</div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'neutral'
        },
        label: String,
        width: [String, Number]
    },
    computed: {
        styles() {
            if (this.width) {
                return {
                    width: this.width + 'px'
                }
            }
        },
        classes() {
            const type = this.type.toLowerCase()
            const classes = []
            if (type) {
                classes.push(`mm-post-it-${type}`)
            }
            if (type !== 'alert') {
                classes.push('shadow-sm')
            }
            return classes
        }
    }
}
</script>
<style scoped>
.mm-post-it {
    position: relative;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: left;
    color: var(--navy-dark);
}

.mm-post-it-alert {
    background: var(--alert-light);
    border: 1px solid var(--alert);
}

.mm-post-it-warning {
    background: var(--warning-light);
    border: 1px solid var(--warning);
}

.mm-post-it-error {
    background: var(--error-light);
    border: 1px solid var(--error);
}

.mm-post-it-success {
    background: var(--success-light);
    border: 1px solid var(--success);
}

.mm-post-it-info {
    background: var(--info-light);
    border: 1px solid var(--info);
}

.mm-post-it-neutral {
    background: var(--gray-2);
    border: 1px solid var(--gray-6);
}
</style>