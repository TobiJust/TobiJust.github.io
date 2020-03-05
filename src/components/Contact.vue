<template>
  <div class="contact">
    <h1 class="contact__headline">
      {{ $vuetify.lang.t('$vuetify.contact_us.headline') }}
    </h1>
    <div class="contact__content">
      <div>
        {{ $vuetify.lang.t('$vuetify.contact_us.telephone') }}: +49 1234 567890
      </div>
      <div>
        {{ $vuetify.lang.t('$vuetify.contact_us.mail') }}:
        <a class="contact__content__mail" href="mailto:sales@bairline.at"
          >sales@bairline.at</a
        >
      </div>
    </div>
    <div class="contact__content__social">
      <a href="https://www.facebook.com/bairline/" target="_blank">
        <v-icon large class="contact__content__social__icon"
          >mdi-facebook</v-icon
        >
      </a>
      <a
        href="https://www.instagram.com/bairline.fluggesellschaft/?hl=de"
        target="_blank"
      >
        <v-icon large class="contact__content__social__icon"
          >mdi-instagram</v-icon
        >
      </a>
      <a
        href="https://de.linkedin.com/company/bairline-fluggesellschaft-mbh-&-co.-kg"
        target="_blank"
      >
        <v-icon large class="contact__content__social__icon"
          >mdi-linkedin</v-icon
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.contact {
  position: relative;
  background: darkgray;
  background-image: url('/images/world-map.png');
  height: 100vh;
  display: grid;
  grid-auto-rows: 40% auto 30%;
  align-items: center;

  &__headline {
    margin-bottom: 25px;
    font-size: 3em;
  }
  &__content {
    align-self: start;
    line-height: 2em;
    font-size: 1.5em;

    &__mail {
      color: var(--v-primary-base);
    }

    &__social {
      a {
        margin-right: 50px;
        text-decoration: none;
      }
      &__icon:hover {
        color: var(--v-primary-darken1);
      }
    }
  }
  &__image {
    margin: -150px 0;
  }
}
</style>
