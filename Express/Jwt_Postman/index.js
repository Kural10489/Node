const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const jwt=require('jsonwebtoken');
const users=require('./models/db.json') 
const secret =require('./models/secret.json')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

app.post('/login',(req,res)=>{
    const user=users.find((user)=>{ return user.username==req.body.username})
    console.log(user);
    if(user){
        if(user.password==req.body.password){
            const token=jwt.sign({userId:user.id
                ,username:user.username
                ,userpassword:user.password},"ajdbcjb13e$%3mwk23")
                res.status(200).send({token})
        }
        else{
            res.status(401).send("Acess Denined !")
        }
    }
    else{
        res.status(401).send("Acess Denined !")
    }
})

function checkToken(req,res,next){

    const token=req.headers["authorization"];
    if(token){
        jwt.verify(token,"ajdbcjb13e$%3mwk23",(err,decode)=>{
            if(err){
                res.status(401).send({message:"Acess Denined ! "})
                return; 
            }
            else{
                req.userId=decode.userid
                next();
            }
        });
    }
    else{
        res.status(401).send({message:"Acess Denined ! "})
    }
}

app.get('/data',checkToken,(req,res)=>{
    const filtered=secret.filter((a)=>{
        console.log(req.userId);
        if(a.userId==req.userId){
        return a.userSecretInfo
        } 
    })
    console.log(filtered);
res.status(200).send({data:filtered})
})
app.listen(3000,()=>{
    console.log("Server Started ");
});