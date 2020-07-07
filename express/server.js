var express = require("express");
var app =  express();

app.get("/",function (req,res) {
    console.dir(req.query)
    res.send("welcome to express")
});

app.get("/hello/:id",function (req,res) {
    console.dir(req.params)
    res.send("hello express id is " + req.params.id)
})
app.post("/post",function (req,res) {
    console.dir(req.query)
    res.status("200").cookie("test","suziyoudian").send(" post hello express")
})
app.listen(3000);
console.log("express listen 3000")