/*Loops in Js

    1.for loop
    2.while loop
    3.do-while loop
    4.for in loop
    5.for of loop

*/

/* There are two types of loops in js

        1. Entry check controlled loop
        2. Exit check controdlled loop

*/

// "Entry check" is nothing but it checks the condition and then it executes the statement. 
// 1.for loop
// 2.while loop

// "Exit check" is nothing but it executes the statement  and then it checks the condition.
// 1.do-while loop


//for loop

// The "continue" is used to skip the particular line in the statement.
// The "break" is used to terminate the program after the particular line.

// It executes the statement again and again till satisfy the condition.

for (i=1;i<=5;i++){
    if(i==3){
        continue;
    }

    if(i==4){
        break;
    }
    console.log("Heloo",i);
}

// while loop

// It executes the statement till the condition is true.

let n=1;
while(n<=5){
    console.log("Vanakam da maple.....",n);
    n++;
}

// do-while loop

// It executes the statement and then it checks the condition. It always going to print the statement for atleast one time even when the condition is false.

let m=1;
do{
    console.log("Yengaaaaa ......",m);
    m++;
}while(m<=5)

// Nested loop

for(a=1;a<=5;a++){
    console.log("Vanakam mooo",a);
    for(b=1;b<=5;b++){
        if(b==3){
            break;
        }
        console.log("Summa adhuruthula",b);
    }
}

// for in loop

// It is mostly used for the objects.To get the values on objects

let posts={
    "id":1,
    "Name":"Nithish",
    "job":"Python Developer"
}

for(let post in posts){
    console.log(posts[post]);
}

// For array

let number = [1,2,3,4,5];

for(let num in number){
    console.log(number[num]);
}

// for of loop

// It is mostly used for the array.

let t = [1,2,3,4,5];

for(let tt of t){
    console.log(tt)
}