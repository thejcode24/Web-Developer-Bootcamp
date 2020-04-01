
const express = require("express")
const app = express()
const port = 3000;


app.get("/", (req, res) => res.send("Hi there, welcome to my assignment!"))

app.get(("/speak/:animal"), function(req, res) {
    // res.send(`The ${animal} goes oink`);
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Bark",
        goldfish: "..."
    }
    res.send(`The ${animal} says ${sounds[animal]}`)
})

app.get(("/repeat/:message/:times") , function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i=0; i<times;i++) {
        result += message
    }

    res.send(`${result}`)
})

app.listen(port, () => console.log(`Port #${port} listening`));