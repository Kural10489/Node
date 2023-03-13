const express=require('express');
const app=express();
const cors=require("cors");

app.use(
    cors({
        origin:"http://localhost:3001"
    })
)
app.get("/data",(req,res)=>{
    res.json({name:'kural',favFood:'biriyani'})
})
app.listen(3000);