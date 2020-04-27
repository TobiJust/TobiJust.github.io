<template>
  <div class="personality">
    <div class="personality__content">
      <h1 class="personality__content__headline">
        {{ $vuetify.lang.t('$vuetify.personality.headline') }}
      </h1>
      {{ $vuetify.lang.t('$vuetify.personality.content') }}
      <div class="personality__button">
        <router-link to="/team">Team</router-link>
      </div>
    </div>
    <div class="personality__image">
      <img
        class="personality__image__img"
        src="@/assets/web/SLT_0779-Bearbeitet.jpg"
        alt
      />
    </div>
    <div class="personality__content" v-if="$vuetify.breakpoint.mdAndUp">
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
  &__content {
    padding: 20px;
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
  &__button {
    margin-top: 25px;
    a {
      font-size: 1em;
      color: white;
      text-decoration: none;
      position: relative;
      z-index: 2;
      padding: 10px 40px;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid white;

      @media @mobile {
        font-size: 1em;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>
