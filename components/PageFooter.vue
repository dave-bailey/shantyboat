<template>
    <div class="footer">Copyright © {{ currentYear }}: Dave Bailey - All Rights Reserved</div>
</template>

<script setup>
  const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: $background;
  display: flex;
  justify-content: center;
  font-size: .75em;
  height: 8em;
  width: 100%;
}
</style>