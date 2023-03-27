const express=require('express');
const app=express();
const session=require('express-session');
const mongoose=require('mongoose');
const MongoDbSession=require('connect-mongodb-session')(session);
const userModel=require('./models/Users') 
const bodyParser=require('body-parser');
const MongoBaseUrl=`mongodb://localhost:27017/sessions`;
const bcrypt=require('bcrypt');

mongoose.connect(MongoBaseUrl,{
}).then((res)=>{
    console.log("Mongo db Connected !");
})


const store=new MongoDbSession({
    uri:MongoBaseUrl,
    collection:'local',
})

//Template engine ejs

app.set("view engine","ejs");
//MiddleWares !

app.use(express.urlencoded({extended:true}));

app.use(
    session({
        secret:"Yaartaiyum sollatha",
        resave:false,
        saveUninitialized:false,
        store:store,
        
    })
)
const isAuth=(req,res,next)=>{
if(req.session.isAuth){
    console.log('auth');
    next();
}else{
    res.redirect('/login')
}

}
// Routes !

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/dashboard",isAuth,(req,res)=>{

        res.render("dashboard")
})

app.post("/register",async (req,res)=>{
   const{email,password}=req.body;
   console.log(email,password);
   let user= await userModel.findOne({email});
   console.log(user);
   if(user){
    return res.redirect('/register');
   }
   const hashedPassword= await bcrypt.hash(password,12);
   user=new userModel({
    email,
    password:hashedPassword
   })
   await user.save();
   res.redirect('/login');

})

app.post("/login",async(req,res)=>{
const {email,password}=req.body;

const user=userModel.findOne({email});

if(!user){
    return res.redirect('login');
}

// const isMatch=await bcrypt.compare(password,user.password);
// console.log(isMatch);

// if(!isMatch){
//     return res.redirect('login');
// }
req.session.isAuth=true;
res.redirect('dashboard');
})
app.listen(3000);