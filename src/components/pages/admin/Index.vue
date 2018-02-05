<template>
  <div>
    <div class="admin-new">
      <div class="">
        <div class="admin-nav">
          <ul class="admin-menu">
            <li><router-link to='/admin'>View Products</router-link></li>
            <li><router-link to='/admin/new'>New Product</router-link></li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
  .admin-menu a,
  .admin-menu a:visited,
  .admin-menu a:hover,
  .admin-menu a:active {
    color: #fff;
    text-decoration: none;
  }
  .admin-nav {
    width: 25%;
    color: #fff;
  }
  .admin-menu li {
    max-width: 60%;
    height: 2rem;
    color: #fff;
    background-color: rgba(236, 189, 216, .8);
    margin: 0.5rem 2rem 0.5rem 2rem;
    list-style: none;
    font-size: 1.5rem;
  }
</style>
