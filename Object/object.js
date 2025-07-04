// The objects are the main in the js. It is used to reduce and make the code works on compact and lesser space.
// The objects are always in a key-value pairs
// The key is always a string pair.
// The value can contain any type of values.


// The objects are also declared in four ways. 
// 1. Literal way
// 2. Constructor way
// 3. constructor function way
// 4. object.create()

// 1. Literal Way
let details = {
    firstname: "Nithish",
    lastname: "M",
    age: 20,
    role: "Python Developer"
}
console.log(details);

// 2. Constructor way
let detial = new Object();

// Adding properties
detial.fname = "Sanjay";
detial.lname = "S";
detial.age = 20;
detial.role = "Java Developer";
console.log(detial);

console.log("************** For Loop ************");

for(let i in details) {
    console.log(details[i]);
    for(let j in details){
        console.log(details[j]);
        
    }
}

// We can retrieve the values inside the object using two types.
// 1. Dot Notation(.)
// 2. SquareBracket Notation []

//1. Dot Notation(.)
console.log("**************** DOT NOTATION ***************");

console.log(details.firstname);
console.log(details.lastname);

//2. SquareBracket Notation[]

console.log(detial["age"]);
console.log(detial["role"]);

// Adding or removing the values from the existing objects

// To add
details.status = "Active";
console.log(details);

// To Modify
details.role = "Python FullStack Developer";
console.log(details);

// To delete

delete details.status;
console.log(details);

// 1. hasOwnProperty
console.log(details.hasOwnProperty("firstname"));
console.log(details.hasOwnProperty("fname"));

// 2. Object.keys

let key = Object.keys(details);
console.log(key);

// 3. Object.values

let value = Object.values(details);
console.log(value);

// 4. Object.entries

let entry = Object.entries(details);
console.log(entry);

// 4. Object,assign

console.log(Object.assign(details,detial));

// 5. Object.freeze. In freeze if determined one time there is no way to upload or modify new string into a freezed mode.

console.log(Object.freeze(details));

details.age = 23;
console.log(details);

details.status = "Active";
console.log(details);

// 6. seal. It is similar to freeze but it accepts the modify value only not a new one.

console.log(Object.seal(details));

details.age = 23;
console.log(details);

details.status = "Active";
console.log(details);

// console.log(Object.seal(details));


// Math Methods


// 1. Date 
let dt = new Date();
console.log(dt)

console.log(dt.getDate());
console.log(dt.getFullYear());
console.log(dt.getHours());
console.log(dt.getMonth());
console.log(dt.getMilliseconds());

// Math

// 2. Math

console.log(Math.ceil(123.89));
console.log(Math.floor(123.89));
console.log(Math.round(123.89));
console.log(Math.max(1,2,3,5,6,7,8));
console.log(Math.min(1,2,3,5,6,7,8));
