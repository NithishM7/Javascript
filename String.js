// String is a primitive data type which is used to store one only vlaues at at time. Using string methods can create an new string without disturbing the existsing one.

/* Ways to create a string

    1.Literal way
    2.Constructor way

// To exract all the values from the given string 

    1. console.log(str[0]);
In modern way we can use

let courseName = "UI Developement";
console.log(courseName);

for(i=0;i<=courseName.length-1;i++){
    console.log(courseName[i])
}
*/

// String Methods - It is used to extract new string without distrurbing the existing one.

// 1.indexOf()

let courseName = "UI Development and UI Design";
console.log(courseName);

console.log(courseName.indexOf("e"));

// 2. lastIndexOf()

console.log(courseName.lastIndexOf("e"));

// 3. CharAt()

console.log(courseName.charAt(8));

// 4. charCodeAt()

console.log(courseName.charCodeAt(3));

// 5. toUpperCase()

console.log(courseName.toUpperCase());

// 6. toLowerCase()

console.log(courseName.toLowerCase());

// 7. toLocaleUpperCase()

console.log(courseName.toLocaleUpperCase('de'));

// 8. toLocaleLowerCase()

console.log(courseName.toLocaleLowerCase("tr"));

// 9.split()

// we can split by empty space " ".
// we can split by comma ","
// we can split by separate characters
console.log(courseName.split(" "));
console.log(courseName.split(","));
console.log(courseName.split(""));

// 10. replace()

console.log(courseName.replace("UI","FullStack"));

// 11. replaceAll()

console.log(courseName.replaceAll("UI","FullStack"));

// 12. substring()

console.log(courseName.substring(3,14));

// 13. includes()

console.log(courseName.includes("U");
console.log(courseName.includes("I");
console.log(courseName.includes("z");
