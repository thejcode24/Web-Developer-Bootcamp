
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Event listener for reset button
resetBtn.addEventListener("click", function () {
    
    // Generate array of random colors
    colors = generateRandomColors(numSquares);

    // Set goal color to random color
    goalColor = pickColor();

    colorDisplay.textContent = goalColor;
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";

});

easyBtn.addEventListener("click", function () {

    // Set number of squares
    numSquares = 3;

    // Remove chosen option style from "hard" button
    hardBtn.classList.remove("selected");

    // Show easy button as chosen option
    easyBtn.classList.add("selected");

    // Erase message
    messageDisplay.textContent = "";

    // Generate 3 RGB values to fill 3 squares for "easy" mode
    colors = generateRandomColors(numSquares);
    goalColor = pickColor();

    // Display RGB value
    colorDisplay.textContent = goalColor;

    for (var i = 0; i < squares.length; i++) {
        // If colors exists, set square color as color
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {

    numSquares = 6;

    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    messageDisplay.textContent = "";

    // Generate 3 RGB values to fill 3 squares for "easy" mode
    colors = generateRandomColors(numSquares);
    goalColor = pickColor();

    // Display RGB value
    colorDisplay.textContent = goalColor;

    for (var i = 0; i < squares.length; i++) {
        // If colors exists, set square color as color
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {

    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function () {

        // Get color of clicked square
        var clickedColor = this.style.backgroundColor;

        // Correct guess sets all squares and header color
        // to the color of the answer square
        if (clickedColor === goalColor) {
            messageDisplay.textContent = "Correct";
            h1.style.backgroundColor = goalColor;
            changeColor(goalColor);
            resetBtn.textContent = "Play Again?";


            // Incorrect guess "erases" square by changing color
            // to background color
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";

        }
    });
}


function changeColor(color) {
    // Changes all the squares to color
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // Picks a random index of colors array 
    var randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}

function generateRandomColors(num) {
    // Generates an array of length num of random rgb values
    // Make array 
    var arr = [];

    // Get random RGB values and add to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    // Get red, green, blue values that will be used for generating 
    // the RGB value in colors array
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Make into rgb(red, green, blue) string format
    return "rgb(" + r + ", " + g + ", " + b + ")";
}