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
  border: .1em solid $background;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: .5em .5em .5em $background;

  &__img {
    width: 100%;
  }

  &__title-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8em;
    width: 90%;
  }

  &__title {
    width: 40%;
    font-size: 1.2em;
    margin: 1em 0;
    font-weight: 600;
    line-height: 90%;
  }
}

.adventure-tile:hover {
  transform: scale(1.01);
}

.overlay {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    background-color: $background;
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
      width: 35%;
      text-align: right;
    }
  }
}

@media screen and (max-width: 875px) {
  .adventure-tile {
    &__description {
      width: 35%;
      text-align: right;
    }
  }
}

@media screen and (max-width: 700px) {
  .adventure-tile {
    &__description {
      width: 35%;
      text-align: right;
    }
  }
}

@media screen and (max-width: 425px) {
  .adventure-tile {
    &__description {
      width: 35%;
      text-align: right;
    }
  }
}
</style>