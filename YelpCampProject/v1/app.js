const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")

// Get route to landing page
app.get("/", (req, res) => {
    res.render("landing")
})

// Get route to get campgrounds page
app.get("/campgrounds" , (req, res) => {
    // Create array as temporary database of campgrounds as objects
    const campgrounds = [
        {name: "Big Bear Campgrounds", image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"},
        {name: "Mountain High", image: "https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
        {name: "Lake Castaic", image: "https://images.unsplash.com/photo-1564577160324-112d603f750f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"}
    ]

    res.render("campgrounds", {campgrounds:campgrounds})
    
})

// Post route to create new campground
app.post("/campgrounds", (req, res) => {

    res.send("You are at the post route")
    // Get data from form and add to campgrounds array
    // Redirect back to campgrounds page
} )

// Get page to create new campground
app.get("/campgrounds/new",  (req, res) => {
    res.render("new.ejs")
})

app.listen(port, function () {
    console.log("YelpCamp started")
})

