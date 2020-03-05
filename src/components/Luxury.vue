<template>
  <div class="luxury">
    <div class="luxury__content">
      <h1 class="luxury__headline">
        {{ $vuetify.lang.t('$vuetify.luxury.headline') }}
      </h1>
    </div>
    <div class="luxury__image">
      <img
        class="luxury__image__img"
        src="@/assets/web/SLT_0740-Bearbeitet.jpg"
        alt
      />
    </div>
    <div class="luxury__content">
      {{ $vuetify.lang.t('$vuetify.luxury.content') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'luxury',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.luxury {
  background: var(--v-primary-darken1);
  line-height: 1.8em;
  color: white;
  display: flex;
  align-items: center;
  transition: transform 2s ease 1s;

  &:hover {
    transform: translateX(-50vw);
    transition: transform 2s ease 0s;
  }

  &__headline {
    margin-bottom: 25px;
  }
  &__content {
    padding: 30px;
    width: 50vw;
  }
  &__image {
    width: 50vw;
    height: 100%;
    display: flex;

    &__img {
      height: auto;
      width: 100%;
    }
  }
}
</style>
