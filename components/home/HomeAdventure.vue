<script setup>
const props = defineProps({
  title: String,
  description: String,
  titleImage: String,
  alt: String,
  copy: String,
  backgroundImage: String,
})

const showOverlay = ref(false)

const imageUrl = ref('')

watchEffect(async () => {
    imageUrl.value = await import(
      `../../public/img/${props.titleImage}.jpeg`
    ).then((lib) => lib.default || lib);
});
</script>

<template>
  <section>
    <div class="adventure-tile" @click="showOverlay = true">
      <img class="adventure-tile__img" :src="imageUrl">
      <div class="adventure-tile__title-container">
        <h4 class="adventure-tile__title">{{ props.title.toUpperCase() }}</h4>
        <p class="adventure-tile__description">{{ props.description }}</p>
      </div>
    </div>
    <div class="overlay" v-if="showOverlay">
      <div class="overlay__container">
        <div class="overlay__top-bar">
          <h2>{{ props.title }}</h2>
          <button @click="showOverlay = false">X</button>
        </div>
        <p>{{ props.copy }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.adventure-tile {
  align-items: center;
  background-color: white;
  border: .1em solid $background;
  box-shadow: .5em .5em .5em $background;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &__img {
    width: 100%;
  }

  &__title-container {
    align-items: center;
    display: flex;
    height: 8em;
    justify-content: space-around;
    width: 90%;
  }

  &__title {
    font-size: 1.2em;
    font-weight: 600;
    line-height: 90%;
    margin: 1em 0;
    width: 40%;
  }
}

.adventure-tile:hover {
  transform: scale(1.01);
}

.overlay {
  background-color: rgba(0,0,0,0.5);
  bottom: 0;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;

  &__container {
    align-items: flex-start;
    background-color: $background;
    display: flex;
    flex-direction: column;
    width: 75%;
  }

  &__top-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

@media screen and (max-width: 1300px) {
  .adventure-tile {
    &__description {
      text-align: right;
      width: 35%;
    }
  }
}

@media screen and (max-width: 875px) {
  .adventure-tile {
    &__description {
      text-align: right;
      width: 35%;
    }
  }
}

@media screen and (max-width: 700px) {
  .adventure-tile {
    &__description {
      text-align: right;
      width: 35%;
    }
  }
}

@media screen and (max-width: 425px) {
  .adventure-tile {
    &__description {
      text-align: right;
      width: 35%;
    }
  }
}
</style>
