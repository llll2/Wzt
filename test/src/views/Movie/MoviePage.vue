<template>
  <div>
    <div class="app-footer">
      <router-link to="/movie/relesed">正在热映</router-link>
    <router-link to="/movie/upcoming">即将上映</router-link>
    </div> 
    <router-view></router-view>
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