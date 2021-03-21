<template>
  <div class="intro">
    <BairlineLogo class="intro__image" />
    <h1 class="intro__headline">
      {{ $vuetify.lang.t('$vuetify.intro.headline') }}
    </h1>
    <p class="intro__content">
      {{ $vuetify.lang.t('$vuetify.intro.content') }}
    </p>
    <div class="intro__tagline">
      <h4>{{ $vuetify.lang.t('$vuetify.intro.taglineHeadline') }}</h4>
      <p class="intro__tagline__content">
        {{ $vuetify.lang.t('$vuetify.intro.tagline') }}
      </p>
    </div>
  </div>
</template>

<script>
import BairlineLogo from '@/components/BairlineLogo'

export default {
  components: { BairlineLogo },
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/less/structure';

.intro {
  background: darkgrey;
  height: 100vh;
  line-height: 1.8em;
  padding-bottom: 25px;

  @media @mobile, @mobileHeight {
    padding-bottom: 25px;
  }

  &__headline {
    margin-bottom: 25px;
  }
  &__image {
    max-width: 100%;
    margin: 50px 0;
    @media @mobile {
      width: 100%;
    }

    @media @tablet {
      width: 70%;
    }

    @media @mobileHeight {
      width: 70%;
    }
  }
  &__content {
    padding: 0 50px;
    font-size: 1em;

    @media @mobile, @mobileHeight {
      font-size: 14px;
    }
  }
  &__tagline {
    margin-top: 85px;
    @media @tablet {
      margin: 0 150px;
      padding-bottom: 50px;
    }

    &__content {
      margin-top: 15px;

      @media @mobile, @mobileHeight {
        font-size: 14px;
        padding: 0 50px;
      }
    }
  }
}
</style>
