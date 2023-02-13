const express = require("express");
const path = require("path");
const hbs= require("hbs");
const { registerPartials } = require("hbs");
require("./db/conn");
const User =  require("./models/usermessage");
const Register = require("./models/userregistration");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended : false}))

//setting path
const staticpath= path.join(__dirname, "../public");
const templatepath= path.join(__dirname, "../templates/views");
const partialpath= path.join(__dirname, "../templates/partials");

//middleware
// app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
// app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
// app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/services",(req,res)=>{
    res.render("services");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/register",(req,res)=>{
    res.render("register");
})



app.post("/contact" , async (req,res) => {
    try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");

    }catch(err){
        res.status(500).send(err);
    };
});

app.post("/register" , async (req,res) => {
    try{
        // res.send(req.body);
        const regData = new Register(req.body);
        await regData.save();
        res.status(201).render("index");

    }catch(err){
        res.status(400).send(err);
    };
})



app.listen(port, ()=>{
    console.log(`server is running at port no. ${port}`);
})