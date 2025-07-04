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

