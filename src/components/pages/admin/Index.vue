<template>
  <div>
    <div class="admin-new">
      <div class="">
        <div class="">
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
