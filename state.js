// The Statements in JS

/* 
There are four Statements in JS
        1.if statement
        2.if-else statement
        3.else-if statement
        4.switch case
*/

// if statement 

//The if block only contains the true value only.It always contains the value that are true only.

let a = 5;
if (a == 5){
    console.log("A is 5"); 
}

// if-else statement

// The if-else statement contains both the true and false values. It executes the "if" block only"if" satisfy the condition.Otherwise it goes to the else block. It executes the condition inside the else block only the condition inside the if is false. 

let aa=18;
if (aa==17){
    console.log("You are not eligible to drive");
}
else{
    console.log("You are eligible to drive");
}

// else-if statement

// The else-if statement only applies if more than two condition in a program. Because it executes the condition one by one as per the details.

let price=9999;

if (price==25000){
    console.log("We Provide Mobiles in the range of 25000. That is good for both gaming and normal use.Camera quality is good"); 
}

else if(price >=17000 && price <=20000){
    console.log("In this range you get the mobiles that are good in normal use and not recommendable for gaming. Camera quality is ok");
}

else if(price >=10000 && price <=15000){
    console.log("In this range mobiles are good in normal watching the youtube videos and not recommendable for gaming and camera quality");
}

else{
    console.log("Sorry we didn't have the mobiles for your range");
}

// switch statement

// It is only preferable for searching the particular execution of a code. It only executes when the value that are matches in the program.It searches the particular content and matches with the value.

let day = 5;
let dayName;

switch(day){
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5:
        dayName="Friday";
        break;
    case 6:
        dayName="Saturday";
        break;
    case 7:
        dayName="Sunday";
        break;
    default:
        dayName="It explits";
        break;
}
console.log(dayName);

