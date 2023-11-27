<script setup>
const title = ref('DB: RESUPPLY CALCULATOR')
const description = ref('A Hiker Resupply Calculator')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <div class="resupply-calculator">
    <div class="resupply-calculator__container">
      <div class="resupply-calculator__left-container">
        <resupply-days-and-calories />
        <div class="resupply-calculator__food-list">
          <resupply-daily-food-list />
        </div>
      </div>
      <div class="resupply_right-container">
        <resupply-add-item />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resupply-calculator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2em;
  padding-top: 1.5em;
  
  &__left-container {
    display: flex;
    flex-direction: column;
    margin-right: 2em;
    width: 22em;
  }

  &__food-list {
    display: flex;
    width: 100%;
  }

  &__container {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  .resupply-calculator {
    align-items: center;
    flex-direction: column;
    justify-content: center;

    &__container {
      flex-direction: column;
    }

    &__left-container {
      margin: 0 0 2em 0;
    }
  }
}
</style>
