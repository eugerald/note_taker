const  app = require("express").Router()
const path = require("path")

app.get("/",function(req,res){ // req request res is response
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

app.get("/notes",function(req,res){ // req request res is response
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})


module.exports = app