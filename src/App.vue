<template>
  <div id="app">

    <nav>
      <div class="container">
        <ul class="nav__left" >
          <li><router-link to='/'>Home</router-link></li>
          <li><router-link to='/admin'>Admin</router-link></li>
          <li><router-link to='/cart'>Cart</router-link></li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, .8);
  margin-top: 60px;
}

h1 {
  font-size: 5rem;
  margin-top: .5rem;
}

.container {
  width: 100%;
  height: 6rem;
  color: #fff;
  background-color: rgba(0, 0, 0, .8);
}

.nav__left, .nav__left li {
  float: left;
}

.nav__left {
  li {
    list-style: none;
    font-size: 2rem;
    margin: .5rem;
  }
  a,
  a:visited,
  a:hover,
  a:active {
    color: #fff;
    text-decoration: none;
  }
}
</style>
