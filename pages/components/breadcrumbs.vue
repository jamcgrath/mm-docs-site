<template>
    <div class="breadcrumbs">
        <mm-breadcrumbs v-for="(breadcrumb, index) in breadcrumbs" :key="index" :items="breadcrumb.items"
            :divider="breadcrumb.divider" />
    </div>
</template>
<script>
import MmBreadcrumbs from '~/components/mm-components/breadcrumbs/MmBreadcrumbs.vue'

export default {
    layout: 'layout-components',
    components: {
        MmBreadcrumbs
    },
    data() {
        return {
            breadcrumbs: [
                {
                    items: [
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
                    ],
                    divider: 'mmi-arrow-right'
                },
                {
                    items: [
                        {
                            text: 'Label',
                            disabled: true,
                            to: 'breadcrumbs_label',
                        },
                        {
                            text: 'Label 1',
                            disabled: false,
                            to: 'breadcrumbs_label_1',
                        },
                        {
                            text: 'Label 2',
                            disabled: false,
                            to: 'breadcrumbs_label_2',
                        },
                        {
                            text: 'Label 3',
                            disabled: true,
                            to: 'breadcrumbs_label_3',
                        },
                        {
                            text: 'Label 4',
                            disabled: false,
                            to: 'breadcrumbs_label_4',
                        },
                        {
                            text: 'Label 5',
                            disabled: true,
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
                {
                    items: [
                        {
                            text: 'Label',
                            disabled: false,
                            to: 'breadcrumbs_label',
                        },
                        {
                            text: 'Label 1',
                            disabled: false,
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
                            disabled: false,
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
                    ],
                    divider: 'mmi-arrow-right'
                },
                {
                    items: [
                        {
                            text: 'Label',
                            disabled: false,
                            to: 'breadcrumbs_label',
                        },
                        {
                            text: 'Label 1',
                            disabled: false,
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
                            disabled: false,
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
                }
            ]
        }
    }
}
</script>

<style scoped>
.breadcrumbs {
    background-color: var(--black-10);
    padding: 10px;
}
</style>