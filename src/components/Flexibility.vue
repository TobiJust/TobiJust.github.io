<template>
  <div class="flexibility">
    <div class="flexibility__content">
      <h1 class="flexibility__headline">
        {{ $vuetify.lang.t('$vuetify.flexibility.headline') }}
      </h1>
    </div>
    <div class="flexibility__image">
      <img class="flexibility__image__img" src="@/assets/flexibility.jpg" alt />
    </div>
    <div class="flexibility__content">
      {{ $vuetify.lang.t('$vuetify.flexibility.content') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'flexibility',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/less/structure';

.flexibility {
  background: var(--v-primary-darken3);
  line-height: 1.8em;
  color: white;
  display: flex;
  align-items: center;
  transition: transform 2s ease 1s;
  @media @mobile {
    flex-direction: column;
  }

  &:hover {
    @media @tablet {
      transform: translateX(-50vw);
    }
    transition: transform 2s ease 0s;
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
