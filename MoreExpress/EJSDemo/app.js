const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("home")
})

app.get("/love/:thing", (req,res) => {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing})
})

app.get("/posts", function(req, res) {

    var posts = [
        { title: "Post 1" , author: "James"},
        { title: "Taking a walk", author: "Ppuggu"},
        { title: "Staring out the window", author: "Mello"}
    ]

    res.render("posts", {posts: posts})
})

app.listen(port, function() {
    console.log("Server 3000 is listening")
})

