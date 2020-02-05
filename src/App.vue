<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/fleet">Fleet</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  width: 100vw;
  top: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#nav a:hover:not(.active) {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
