// It is access by an index of an value.
// Array is used to create an variable which contains many type of variables and different type of variables. 

/* There are two ways to create an array like string.
    1. literal way.
    2. constructor way.


// 1. Literal way

let courseNames = ["Java Full Stack","Python Full Stack","Mern Stack","Mean Stack","JavaScript Development"];
console.log(courseNames);

// 2. Constructor way

let course = new Array("Js","Python","Java");
console.log(course);

*/

// Array methods is also used to create an array without distrubing the existing array. But some of the array disturbs are changes the old array.

// 1. push()

let num = [1,2,3,4,5];
num.push(6);
console.log(num);

// 2. pop()

num.pop();
console.log(num);

// 3. unShift()

num.unshift(0);
console.log(num);

// 4. shift()

num.shift();
console.log(num);

// 5. splice()
// to add()
num.splice(0,0,-1,0);
console.log(num);

// to delete
num.splice(0,2);
console.log(num);

// 6. slice()

let nums=num.slice(1,5);
console.log(nums);

//. 7. includes()

console.log(num.includes(1));
console.log(num.includes(7));

// 8. reverse()

num.reverse();
console.log(num);

// 9. concat()

let course = "Python";
let names = "Development";

console.log(course.concat(names))
console.log(course,names);
