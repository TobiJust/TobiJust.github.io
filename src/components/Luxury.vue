<template>
  <div class="luxury">
    <div class="luxury__content" v-if="$vuetify.breakpoint.mdAndUp">
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
      <h1 class="luxury__content__headline">
        {{ $vuetify.lang.t('$vuetify.luxury.headline') }}
      </h1>
      {{ $vuetify.lang.t('$vuetify.luxury.content') }}
      <div class="luxury__button">
        <a
          href="/downloads/Menu List.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $vuetify.lang.t('$vuetify.catering.button') }}</a
        >
      </div>
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
@import '../assets/less/structure';

.luxury {
  background: var(--v-primary-darken1);
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
    i {
      color: white;
    }
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
