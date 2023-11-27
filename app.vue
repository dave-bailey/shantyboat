<script setup>
const title = ref('DAVE BAILEY')
const description = ref('Software Engineer & Hiker')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style lang="scss">

body {
  margin: 0;
}

.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
  color: $primary-font;
}
</style>