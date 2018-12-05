const express=require("express");
const hbs=require("hbs");

const app=express();
app.set("view engine", hbs);
let requestAt= new Date();
function getRequestDate(req,res,next){

    res.send('<center><h1 >Our office is not open now</h1></center>');
    next()
    }


if
(requestAt.getHours()>=17 || requestAt.getHours()<=8)
app.use(getRequestDate);
else
    app.use(express.static(__dirname + '/view'));


/*
app.get('/',(req,res)=>{
    res.render(__dirname+"/view/home.hbs",{name:"Sabri"})
})
*/



app.listen(3000, (err)=>{
    if (err) console.log("Server is not running");
    else console.log("Server is running on port 3000");
});