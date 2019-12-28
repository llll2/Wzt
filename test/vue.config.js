const MovieData = require('./public/mock/movie.json')

module.exports={
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get('/api/list',(req,res)=>{
        res.json({
          errCode:0,
          list:MovieData
        })
      })
    }
  }
}