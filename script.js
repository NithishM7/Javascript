/* Operators in js
    1.Arithmetic operator
    2.Assignment operator
    3.Comparison operator
    4.Logical operator

*/

// Arithmetic Operator (+,-,*,/,%,++,--) This same for all the arithmetic operators.

let a = 5;
let b = 7;

let c = a + b;

console.log(c);

/* Increment operator 
    1. Prefix increment operator
    2. Postfix increment operator
*/

// Prefix 

let aa = 7;
++aa;
console.log(aa);

// Postfix

let aaa = 6;
console.log(aaa++);
console.log(aaa);

// This is also same for the decrement.


// Assignment Operator (==,===,+=,-=,*=,/=,%=)

console.log("Assignment operator");

console.log("Nithish" == "Nithish");
console.log(true == true);
console.log("8" == 8);

console.log("Nithish" === "Kathir");
console.log(true === false);
console.log("8" === 8);
console.log(9 === 9);

// Comparison Operator

console.log("Comparison operator");

console.log(5<3);
console.log(5>3);
console.log(5<=3);
console.log(5>=5);

// Logical Operator

console.log("And Operator");

console.log(1 && 1);
console.log(0 && 1);
console.log(1 && 0);
console.log(0 && 0);

console.log("Or Operator");

console.log(1 || 1);
console.log(0 || 1);
console.log(1 || 0);
console.log(0 || 0);

console.log("Not Operator");

console.log(4 != 4)
console.log(4 != 5)
