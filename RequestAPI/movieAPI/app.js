const express = require('express')
const app = express()
const request = require('request')
const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("search")
})

app.get("/results", (req,res) => {
    let query = req.query.search
    let url = "http://www.omdbapi.com/?s="+ query + "&apikey=49da81da"

    request(url , (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body)
            res.render("results", {data: data})
        }
    })
})

app.listen(port, function() {
    console.log("Server 3000 is listening")
})

