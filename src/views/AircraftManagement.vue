<template>
  <div class="management">
    <div class="wrapper">
      <img src="@/assets/aircraft_management.jpg" alt="" />
      <h1>This aircraft management page is still under construction</h1>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@import '../assets/less/structure';
.management {
  height: 100vh;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 10% repeat(3, minmax(5rem, 1fr)) 10%;
  grid-template-rows: 2fr 1fr 1fr;

  @media @medium {
    height: 100vh;
  }
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  & h1 {
    position: absolute;
    height: 45px;
    left: 0;
    right: 0;
    top: 10%;
    z-index: 2;

    font-size: 1.8em;
    color: white;
    text-decoration: none;
    z-index: 2;
  }
}
</style>
