<template>
  <div>
   <ul v-for="(item,index) in list" :key="index">
     <img :src="item.img" alt="">
     {{item.nm}}
   </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
      this.$http.get('/api/list').then(res=>{
        const data = res.data.list.movieList
        console.log(data)
        this.list = data
      })
    }
  },
}
</script>