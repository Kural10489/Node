const express=require('express');
const app=express();
const bodyparser=require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send(`<h1> 404 Page not Found</h1>`)
})

app.listen(3000);
