<template>
  <div class="footer">
    <div class="footer__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/fleet">Fleet</router-link>
      <router-link to="/aircraft-management">Aircraft Management</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <div class="footer__legal">
      <a
        href="/downloads/T&Cs Bairline Fluggesellschaft GmbH.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >Terms & Conditions</a
      >
      <a
        href="/downloads/T&Cs Bairline Fluggesellschaft GmbH.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >Impressum</a
      >
      <a
        href="/downloads/Menu List.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >Catering</a
      >
    </div>
    <hr class="footer__divider" />
    <p class="footer__copyright">
      All Rights Reserved © Bairline Fluggesellschaft mbH & Co. KG, Innsbrucker
      Bundesstraße 107, 5020 Salzburg, AT,
      <a href="tel:+49 1234 567890">+49 1234 567890</a>
      <br />
      Website by Tobias Just
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
@import '../assets/less/structure';

.footer {
  background-color: #333;
  padding-bottom: 25px;

  &__nav {
    padding: 0;
    margin: 0;
    overflow: hidden;
    width: 100vw;
    display: grid;
    align-items: center;
    justify-content: center;
    z-index: 1;

    @media @tablet {
      height: 10vh;
      grid-template-columns: max-content max-content max-content max-content max-content;
    }

    @media @mobile {
      padding: 15px 0;
    }

    & a {
      float: left;
      display: block;
      color: white;
      text-align: center;
      padding: 0 16px;
      text-decoration: none;

      &:hover {
        color: var(--v-primary-base);
      }
    }
  }
  &__legal {
    display: grid;
    align-items: center;
    justify-content: center;

    @media @tablet {
      height: 5vh;
      grid-template-columns: max-content max-content max-content;
    }

    & a {
      font-size: 0.8em;
      float: left;
      display: block;
      color: white;
      text-align: center;
      padding: 0 10px;
      text-decoration: none;

      &:hover {
        color: var(--v-primary-base);
      }
    }
  }
  &__copyright {
    margin: 0 10%;
    @media @tablet {
      height: 5vh;
    }
    color: white;
    font-size: 0.8em;
    line-height: 1.5em;
    & a {
      color: white;

      &:hover {
        color: var(--v-primary-base);
      }
    }
  }
  &__divider {
    margin: 25px 10%;
  }
}
</style>
