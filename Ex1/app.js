// Analyze and fix the following code:

var name = "Jone";
console.log(name);
function test() {
    var x = 10;
    if (true) {
        var y = 20;
    }
    console.log(x);
    console.log(y);
}
test();

// ● Predict the output before running the code.
//* undefined for name variable/ 20 for y/ x will give an errro
// ● Explain how hoisting works with var.
//* JS will rigister all declaration at the start of the program giving undefined with var.
// ● Identify the difference between function scope and block scope.
//* block scope like if statement allows var to access variables inside them but function scope doesn't
// ● Rewrite the example using let where appropriate.

let name2 = "Jone";
console.log (name2);
function test (){
    let x = 10;
    if (true)
    {
        let y = 20;
        console.log(y);
    }
    console.log(x);
}
test ();
