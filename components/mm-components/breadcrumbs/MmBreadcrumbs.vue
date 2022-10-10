<template>
    <nav aria-label="Breadcrumbs" class="breadcrumbs-container">
        <ul class="breadcrumbs-items">
            <li class="breadcrumbs-item" v-for="(item, index) in items" :key="index">
                <nuxt-link class="body breadcrumbs-item-link" :class="linkClass(item.disabled, index)" :to="item.to"
                    :aria-current="isActive(index) && 'page'">
                    {{ item.text }}
                </nuxt-link>
                <div class="px-1_5 breadcrumbs-item-divider" v-if="index < items.length - 1">
                    <i class="flex a-items-center mmi" :class="divider" aria-hidden="true"></i>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => {
                return [
                    {
                        text: 'Label',
                        disabled: true,
                        to: 'breadcrumbs_label',
                    },
                    {
                        text: 'Label 1',
                        disabled: true,
                        to: 'breadcrumbs_label_1',
                    },
                    {
                        text: 'Label 2',
                        disabled: false,
                        to: 'breadcrumbs_label_2',
                    },
                    {
                        text: 'Label 3',
                        disabled: false,
                        to: 'breadcrumbs_label_3',
                    },
                    {
                        text: 'Label 4',
                        disabled: true,
                        to: 'breadcrumbs_label_4',
                    },
                    {
                        text: 'Label 5',
                        disabled: false,
                        to: 'breadcrumbs_label_5',
                    },
                    {
                        text: 'Label 6',
                        disabled: false,
                        to: 'breadcrumbs_label_6',
                    },
                    {
                        text: 'Label 7',
                        disabled: false,
                        to: 'breadcrumbs_label_7'
                    }
                ]
            },
        },
        divider: {
            type: String,
            default: 'mmi-slash'
        },
    },
    methods: {
        isActive(index) {
            return index === this.items.length - 1
        },
        linkClass(disabled, index) {
            if (disabled) return 'breadcrumbs-item-disabled'
            if (this.isActive(index)) return 'breadcrumbs-item-activated'
        },
    },
}
</script>

<style scoped>
.breadcrumbs-container {
    padding: 6px;
}

.breadcrumbs-items {
    margin: 0;
    padding-left: 0;
    list-style: none;
}

.breadcrumbs-item {
    display: inline-flex;
    align-items: center;
    padding: 3px;
}

.breadcrumbs-item-link {
    background-color: var(--white);
    color: var(--navy-dark);
    border-radius: 8px;
    padding: 4px 12px;
    height: 28px;
}

.breadcrumbs-item-link:not(.breadcrumbs-item-disabled, .breadcrumbs-item-activated):hover {
    color: var(--navy);
}

.breadcrumbs-item-disabled {
    background-color: var(--gray-3);
    color: var(--gray-6);
}

.breadcrumbs-item-activated {
    color: var(--white);
    background-color: var(--grape);
}

.breadcrumbs-item-disabled,
.breadcrumbs-item-activated {
    pointer-events: none;
}

.breadcrumbs-item-divider {
    color: var(--gray-5);
}

.mmi-slash:before {
    content: '\002f';
}
</style>
