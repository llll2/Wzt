<template>
  <div id="app">
    <header class="header">
          
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>
<script>
import Footer from './components/FooterBar'
export default {
  data() {
    return {
      
    }
  },
  components:{
    Footer
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
body,html{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #374452;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  width: 100%;
  flex: 1;
  overflow: auto;
}
.footer,.header{
  width: 100%;
  height: 50px;
  background: red;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
