<template>
  <div class="flexibility">
    <div class="flexibility__content" v-if="$vuetify.breakpoint.mdAndUp">
      <h1 class="flexibility__headline">
        {{ $vuetify.lang.t('$vuetify.flexibility.headline') }}
      </h1>
    </div>
    <div class="flexibility__image">
      <img class="flexibility__image__img" src="@/assets/flexibility.jpg" alt />
    </div>
    <div class="flexibility__content">
      <h1 class="flexibility__content__headline">
        {{ $vuetify.lang.t('$vuetify.flexibility.headline') }}
      </h1>
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
  transition: transform 2s ease 180s;
  // animation-fill-mode: forwards;
  @media @mobile {
    flex-direction: column;
  }

  @media @mobileDevice {
    flex-direction: column;
  }

  &:hover {
    @media @tablet {
      transform: translateX(-50vw);
    }
    transition: transform 2s ease 0s;
  }
  &__content {
    padding: 25px;
    @media @tablet {
      width: 50vw;
    }
    @media @medium {
      padding: 30px;
    }

    @media @mobileHeight {
      width: 50vw;
      font-size: 12px;
      line-height: 1.8em;
    }

    @media @mobileDevice {
      width: 100%;
    }

    &__headline {
      margin-bottom: 25px;
    }
  }
  &__image {
    @media @tablet {
      width: 50vw;
    }
    height: 100%;
    display: flex;

    &__img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
