<template>
  <header
    class="mmd-header grape-bg white px-4 py-1_5 fw-6 flex a-items-center grid"
    ref="header"
  >
    <h1 class="title-6">MM-Docs</h1>
    <div class="mmd-header-buttons">
      <nuxt-link to="/" class="white body_link mx-3">CSS</nuxt-link>
    </div>
  </header>
</template>

<style scoped>
.mmd-header {
  display: grid;
  grid-template-columns: 187px 1fr;
}
.mmd-header-buttons button {
  background: transparent;
  border: 0;
  color: inherit;
  padding: 0;
  min-width: 40px;
}
.icon-code {
  font-family: monospace;
  font-size: 14px;
  font-weight: 800;
}
</style>
