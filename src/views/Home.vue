<template>
  <div class="home">
    <div class="home__header">Header</div>
    <img class="cover-img" alt="Bairline" src="../assets/cover.jpg" />
    <div class="cover-button">
      <h2>Bairline Fluggesellschaft mbH & Co. KG</h2>
    </div>
    <Intro msg="Bairline Fluggesellschaft mbH & Co. KG" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  components: {
    Intro
  }
};
</script>

<style scoped>
.cover-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 0 100%;
}

.cover-button {
  position: absolute;
  right: 200px;
  top: 40%;
  background: rgba(255, 255, 255, 0.1);
  padding: 0 15px;
}
.cover-button > h2 {
  color: #333;
}
</style>
