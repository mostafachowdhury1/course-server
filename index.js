const express=require('express')
const app=express()
const cors=require('cors')
const Port=process.env.PORT || 5000;

app.use(cors())
const cetagory=require('./data/cetagory.json')
const news=require('./data/news.json')
const ness=require('./data/ness.json')

app.get("/cetagory",(req,res)=>{
    res.send(cetagory)
})




app.get("/news",(req,res)=>{
    res.send(news)
})

app.get('/cetagory/:id',(req,res)=>{
    const id=req.params.id;
    const allnews=news.find(n=>n.id==id)
    res.send(allnews)
})

app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    const allnews=news.find(n=>n.id==id)
    res.send(allnews)
})

app.get("/",(req,res)=>{
    res.send("server is runnging")
})

app.listen(Port,()=>{
 console.log("server run in ",Port)
})



module.exports = app;