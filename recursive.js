/*
- Create a recursive function - 
Create a recursive function that counts up to 10. Invoke the function with different
start numbers as the arguments that are passed into the function. The function
should run until the value is greater than 10.
*/

// Define a function named 'recursiveFunction' that takes one argument 'x'
function recursiveFunction(x) {
    // Print the current value of 'x' to the console
    console.log(x);

    // Check if 'x' is less than 10
    if (x < 10) {
        // Increment 'x' by 1 and call 'recursiveFunction' again (recursive call)
        recursiveFunction(++x);
    }
}

// Call 'recursiveFunction' with an initial value of 5
recursiveFunction(5);


/*
5
6
7
8
9
10
*/