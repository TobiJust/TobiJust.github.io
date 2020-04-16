<template>
  <div class="personality">
    <div class="personality__content">
      {{ $vuetify.lang.t('$vuetify.personality.content') }}
    </div>
    <div class="personality__image">
      <img
        class="personality__image__img"
        src="@/assets/web/SLT_0779-Bearbeitet.jpg"
        alt
      />
    </div>
    <div class="personality__content">
      <h1 class="personality__headline">
        {{ $vuetify.lang.t('$vuetify.personality.headline') }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personality',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/less/structure';

.personality {
  background: var(--v-primary-darken4);
  line-height: 1.8em;
  color: white;
  display: flex;
  align-items: center;
  transition: transform 2s ease 2s;
  @media @mobile {
    flex-direction: column-reverse;
  }
  @media @tablet {
    transform: translateX(-50vw);
  }

  &:hover {
    @media @tablet {
      transform: translateX(0px);
    }
    transition: transform 2s ease 0s;
  }
  &__headline {
    margin-bottom: 25px;
  }
  &__content {
    padding: 30px;
    @media @tablet {
      width: 50vw;
    }
  }
  &__image {
    @media @tablet {
      width: 50vw;
    }
    height: 100%;
    display: flex;

    &__img {
      height: auto;
      width: 100%;
    }
  }
}
</style>
