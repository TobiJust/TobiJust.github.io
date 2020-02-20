<template>
  <div class="intro">
    <img class="intro__image" src="@/assets/logo/Logo.png" alt="Bairline" />
    <h1 class="intro__headline">{{ $vuetify.lang.t("$vuetify.intro.headline") }}</h1>
    <p class="intro__content">{{ $vuetify.lang.t("$vuetify.intro.content") }}</p>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.intro {
  background: darkgrey;
  height: 100vh;
  padding: 0 50px;
  line-height: 1.8em;

  &__headline {
    margin-bottom: 25px;
  }
  &__image {
    margin: -150px 0;
  }
}
</style>
