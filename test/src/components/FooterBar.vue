<template>
  <div class="app-footer">
    <router-link to="/movie">电影</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>

<style lang="scss">
  .app-footer{
    width: 100%;
    height: 50px;
    display: flex;
    a{
      flex: 1;
      display: flex;
      font-size: 24px;
      justify-content: center;
      align-items: center;
      color: black;
      &.router-link-exact-active{
        color: white;
        background: black;
      }
    }
  }
</style>
