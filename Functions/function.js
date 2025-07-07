// The functions are block of code that is used to reuse again and again in program.

// syntax:

// functin keyword function name(){
    // block of code
    // Statements
// }
// function name() -> Invoking

function name(){
    let name = "Nithish";
    console.log(name);
}
name()

// 1. function without parameter

function add(){
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log(sum);
}
add()

// 2. function with parameter

function addition(a,b){
    let sum = a + b;
    console.log(sum);
}   
addition(20,40);

// 3. function with default parameter

function mulitply(a, b = 10){
    let mult = a * b;
    console.log(mult);
    
}
mulitply(5);

// We can also change the default parameter value

mulitply(10,20);

// 4. function with return keyword

function fname(){
    let fname = "Nithish"
    return fname;
}
console.log(fname());

// Once system reads the return keyword it won't run the below codes and won't consider the below values.

function sub(a,b){
    let ans = a - b;
    return ans;

    let aa = 20;
    let bb = 30;
    let sem = aa + bb;
    console.log(sem);
}
console.log(sub(20,10));

// Nested Function - Is nothing but intializing the function inside another function is called nested function.

function a(){
    console.log("This is outer function");
    function b(){
        console.log("This is inner function");
    }
    b();
}
a();

// inner function is have to call inside a outer function because it didn't holds the lexical in outer.

// Difference between function statement and function expression

// fuction statement is nothing but declaring a function in normal way or literal way. 

function name(){
    console.log("Function statement");
}
name()

// function expression is nothing but getting a whole function as a value. The variable contains a whole function as a value.

var c = function () {
    console.log("Function Expression");
}
c();

// The difference between both is hoisting.

// For normal function statement or declaration is hoisting accepted and it can give the value. 
// EX:

// name()
// function name(){
//     console.log("Function statement");
// }

// But for function expression it can't give the value because hoisting is not work here.

// c();

// var c = function () {
//     console.log("Function Expression");
// }

// anonymous Function - It is nothing but creating one function without declaring a name. The main purpose of anonymous function is used to assign an function expression

// function(){
//     console.log("Super");
// }

// Function Expression

// var aa = function(){
//     console.log("Super");
    
// }

// Named Function Expression - It is nothing but creating one function in a normal way. Then it is assigned to function expression.

// var aa = function vv(){
//     console.log("Super");
// }

// aa();

