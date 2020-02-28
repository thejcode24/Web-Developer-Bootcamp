
var numSquares = 6;
var colors = [];
var goalColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var modeBtn = document.querySelectorAll(".mode")


init();

function init() {

    // Set up mode buttons
    setUpModeButtons();

    // Set up squares
    setUpSquares();

    // Reset colors
    resetColor();

}


// Event listener for reset button
resetBtn.addEventListener("click", function () {

    resetColor();

});




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

function resetColor() {
    // Generate array of random colors
    colors = generateRandomColors(numSquares);

    // Set goal color to random color
    goalColor = pickColor();

    colorDisplay.textContent = goalColor;
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";

    resetBtn.textContent = "New Colors";
}

function setUpModeButtons() {
    // Button listeners
    for (var i = 0; i < modeBtn.length; i++) {

        modeBtn[i].addEventListener("click", function () {

            // Not ideal but hardcoding so that class selected 
            // is removed from both buttons, then added to clicked button
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");

            // Add class selected to clicked button
            this.classList.add("selected");

            // Set correct number of squares
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            resetColor();

        })
    }
}

function setUpSquares() {
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

            } else {

                // Incorrect guess "erases" square by changing color
                // to background color
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}