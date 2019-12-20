<template>
  <div id="app">
    <div id="nav" class="container-fluid">
      <div class="row">
        <div class="col-6" id="home-link">
          <router-link to="/">
            <h3>Bug Logger</h3>
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: cornflowerblue;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}
#home-link {
  display: flex;
  justify-content: flex-start;
}
</style>
