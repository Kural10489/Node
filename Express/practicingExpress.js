const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const http=require('http');


// Handling Different Urls/Routes

app.use('/fstPage',(req,res,next)=>{
    console.log("Express Page 1");
    res.send(`<h1>Express Page 1</h1>`)
    });
    
    app.use('/secPage',(req,res,next)=>{
    
    console.log("Express Page 2");
    res.send(`<h1>Express Page 2</h1>`)
    })
    app.use((req,res,next)=>{
        console.log("Always");
        res.send(`<h1>Express Always Page</h1>`)
        });
    
    
    // Parsing Data From Request
    
    
    app.use(bodyparser.urlencoded())
    app.use(`/addProduct`,((req,res,next)=>{
        res.send(`<h1>Add a product</h1>
        <br>
        <form action="/storeProduct" method="POST" >
        <input type="text" name="title"/>
        <input type="submit" value="submit"/>
        </form>`)
    }))
    
    app.use(`/storeProduct`,((req,res,next)=>{
        console.log(`Formdata: `,req.body);
        res.send(`Product Submited`)
    }))
    
    // Handling Only Post Request
    
    
    app.use(bodyparser.urlencoded())
    app.use(`/addProduct`,((req,res,next)=>{
        res.send(`<h1>Add a product</h1>
        <br>
        <form action="/storeProduct" method="POST" >
        <input type="text" name="title"/>
        <input type="submit" value="submit"/>
        </form>`)
    }))
    
    app.post(`/storeProduct`,((req,res,next)=>{
        console.log(`Formdata: `,req.body);
        res.send(`Product Submited`)
    }))
    