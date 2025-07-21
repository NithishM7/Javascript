// Advanced Array is a built-in methods that allows the user to get the values with or without modifying the original array.
// In array every values should be in array only. Because it only accepts the array and then we have an chance to get the values as per the condition.


// 1.forEach() - It iterates the every element in a array and it doesn't return a values in array.
let nums = [1,2,3,4,5];

nums.forEach(function(num){
    console.log(num)
})

// Output:
// 1
// 2
// 3
// 4
// 5

// 2.map() -It iterates the every element and gives the new array with what the user wants

let number = [1,4,7,9];

const sup = number.map(function(numb){
    return numb * 2
});
console.log(sup);  //[2, 8, 14, 18]

// It will create a new array from the original one.

// 3.filter() - It filters the given array for the specific user condition. It gives assigns the values to a new variable.

let arr = [1,2,3,4,5];

const fill = arr.filter((number) =>{
    return number % 2 === 0;
});
console.log(fill); // [2, 4]

// Above filters the array as per the user condition.

// 4. reduce() - It iterates the whole array and returns only single value or only one value.

// In reduce we have to intialize the (accumulator and value) accumulator takes the value we assign and the values that starts from the values in a array.

let isai = [1,5,7,9];

let sum = isai.reduce((acc,curr)=>acc+curr,0);      // In last 0 is assigned to the accumulator and currentvalue that strats from the array values. 

console.log(sum);  //22

// 5. sort() - It assigns or store all the values in a alphabetical order(lexographical order) even numbers also but sort() is not preferable for numbers.

// In sort() we have to fix the compare function that takes two inputs and it checks the values.

let ani = [4,6,100,8,1];

let sor = ani.sort();

console.log(sor); // [1, 100, 4, 6, 8]

// It compare the values and then it started sorting but it is not workout for numbers.
// To stop we have to use the compare function.

let sorr = ani.sort((a,b) =>{
    return a - b;
});
console.log(sorr); // [1, 4, 6, 8, 100] - It assigns the values in ascending order. If we want the values that print in descending then a + b;

// 6. find() - It is used to search through an array and it satisfies the firstelemnt it stops the execution.

let fin = [1,2,3,4,5,6];

let av = fin.find((n)=>{
     return n % 2 != 0;
})
console.log(av); // 1

// 7. some() - It checks the array and then it checks any conditon if any one element that satisfies the condition it stops at the first.

let so = [1,2,4,7,9,54];

let s = so.some(o=>o % 2 === 0);
console.log(s);  // true. Because it some elements that satisfies the condition

// 8. every() - It checks the whole array and then it checks any condition if every element that satisfies the condition. It gives false if any one value that didn't safisfy

let eve = [1,2,4,7,9,54];

let even = eve.every(ev => ev % 2 === 0);
console.log(even);  // false

