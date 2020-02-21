
// isEven
// Finds if number is even or odd and returns true if even, else false
function isEven(num) {
    if(num%2 === 0) {
        return true;
    }
    return false;
}

function isEven(num) {
    return num % 2 === 0;
}

// factorial
// Recursive and non-recursive way to find the factorial of a number

//Non-recursive method
function factorial(num) {
    let count = 1;

    for(let i=num; i>0; i--) {
        count *= i;
    }
    return count;
}

//Recursive method
function factorial(num) {
    if(num < 0) {
        return -1;
    }
    else if(num === 0 || num === 1) {
        return 1;
    }
    else{
        return num * factorial(num-1); 
    }
}

//kebabToSnake
//replace "-" with "_" , making snake_cased version
function kebabToSnake(str) {
    return str.replace("-", "_");
}

