const app = require("express").Router()
let db = require("../db/db.json")
const fs = require("fs")

app.get("/api/notes", function (req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(db)
})

app.post("/api/notes", function (req, res) {
    var note = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.radom * 999)
    }

    db.push(note)
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (req, res) {
        if (err) throw err;
    })
    res.json(db)
})







module.exports = app;
