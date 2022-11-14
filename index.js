const express=require('express')
const app=express()
const cors=require('cors')
const Port=process.env.PORT || 5000;

app.use(cors())
const cetagory=require('./data/cetagory.json')
const news=require('./data/news.json')
const ness=require('./data/ness.json')
app.get("/Newscetagory",(req,res)=>{
    res.send(cetagory)
})


app.get("/ness",(req,res)=>{
    res.send(ness)
})


app.get("/news",(req,res)=>{
    res.send(news)
})
app.get('/cetagory/:id',(req,res)=>{
    const id=req.params.id;
    const allcetagory=news.filter(n=>n.category_id===id)
    res.send(allcetagory)
})

app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    const allnews=news.find(n=>n.id==id)
    res.send(allnews)
})

app.get("/",(req,res)=>{
    res.send("heyy")
})

app.listen(Port,()=>{
 console.log("run is",Port)
})



module.exports = app;