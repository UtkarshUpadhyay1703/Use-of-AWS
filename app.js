const express=require("express");
const app=express();
const path=require("path");

app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,resp){
    resp.sendFile("./public/page.html",{root:__dirname});
})
app.listen(8000);
console.log("Running on port number : 8000")