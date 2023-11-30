<script setup>
const props = defineProps({
  title: String,
  description: String,
  titleImage: String,
  subheader: String,
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
      <img class="adventure-tile__img" :src="imageUrl" :alt="props.title">
      <div class="adventure-tile__title-container">
        <h4 class="adventure-tile__title">{{ props.title.toUpperCase() }}</h4>
        <p class="adventure-tile__description">{{ props.description }}</p>
      </div>
    </div>
    <div class="overlay" v-if="showOverlay">
      <div class="overlay__container">
        <div class="overlay__top-bar">
          <button @click="showOverlay = false">X</button>
        </div>
        <div class="overlay__content">
          <div>
            <h2 class="overlay__content-title">{{ props.title.toUpperCase() }}</h2>
            <h4 class="overlay__content-subheader">{{ props.subheader }}</h4>
          </div>
          <p  class="overlay__content-body" v-html="props.copy"></p>
        </div>
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
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;

  button {
    background-color: white;
    border: none;
    cursor: pointer;
    font-size: 2em;
  }

  button:hover {
    transform: scale(1.1);
  }

  &__container {
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
    width: 75%;
  }

  &__top-bar {
    display: flex;
    justify-content: flex-end;
    padding: 2em 4em  0 0;
    width: 100%;
  }

  &__content {
    display: flex;
    justify-content: center;
    overflow: auto;
    width: 80%;

    &-title {
      font-size: 4em;
      line-height: 80%;
      margin-bottom: 0;
      padding-top: 1em;
    }

    &-subheader {
      font-size: 1.2em;
      font-weight: 300;
    }

    &-body {
      line-height: 2em;
      overflow: auto;
      padding: 1em 1em 2em 4em;
    }
  }
}

@media screen and (max-width: 1300px) {
  .adventure-tile {
    &__description {
      text-align: right;
      width: 35%;
    }
  }
  .overlay {
    &__content {
        flex-direction: column;

        &-body {
          border-top: .2em solid $background;
          padding: 2em 0 0 0;
        }
    }
  }
}

@media screen and (max-width: 700px) {
  .overlay {
    &__container {
      width: 90%;
    }

    &__content {
        &-title {
        font-size: 2em;
      }
    }

    &__top-bar {
    padding: 2em 2em 0 0;
    }
  }
}
</style>
