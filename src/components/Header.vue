<template>
  <div class="top-bar">
      <ul>
          <li>Home</li>
          <li>Fleet</li>
          <li>Contact</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.top-bar {

}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>