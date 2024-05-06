<template>
  <div class="default-wrap pt-12">
    <docs-header class="default-header fixed t-0 w-100 z-10"></docs-header>
    <docs-sidebar
      class="default-sidebar overflow-y-auto hide-scroll fixed"
    ></docs-sidebar>
    <main class="p-3">
      <Nuxt />
    </main>
    <docs-footer class="default-footer z-10 fixed b-0 w-100"></docs-footer>
  </div>
</template>

<script>
import DocsSidebar from '~/components/DocsSidebarCss.vue'
import DocsOffCanvasSidebar from '~/components/DocsOffCanvasSidebar.vue'
import DocsHeader from '~/components/DocsHeader.vue'
import DocsFooter from '~/components/DocsFooter.vue'

export default {
  components: {
    DocsSidebar,
    DocsHeader,
    DocsFooter,
    DocsOffCanvasSidebar,
  },
}
</script>

<style></style>
