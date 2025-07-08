// DOM - Document object model is used to manipulate or make a change in the html program.

// DOM usually works in the tree like structure and all the elements inside a program is a node.

// Node - Nodes are nothing but the tag that are inside the document or file. The nodes are usually relation to other nodes and it also contain the parent child relation.

/* There are 5 Types
1. getElementById()
2. getElementByName()
3. getElementByClassName()
4. getElementByTagName()
5.querySelector() & querySelectorAll()
*/

// // 1.getElementById() - It is used to get the specific element that matches the id.

// let msg = document.getElementById("vena");
// msg.textContent = "Haiii";
// console.log(msg)

// // 2.getElementByName() - It is used to access the element by using the name.

// let na = document.getElementsByName("language");
// console.log(na);

// // 3.getElementByClassName() - It is used to get the element by using the class name.

// let cont = document.getElementById("container")
// let cl = cont.getElementsByClassName("adi");
// console.log(cl);

// // 4.getElementByTagName() - It is used to get the element by using the tag name.

// let ta = document.getElementsByTagName("h3");
// console.log(ta);

// // 5. querySelector()- This selects the first element that contains the specific name & querySelectorAll() - This selects the all element that contains specific name.

// let q = document.querySelector(".adi");
// console.log(q);

// let qq = document.querySelectorAll(".adi");
// console.log(qq);


// Traversing Element


// Getting the parent element 
// let txt = document.querySelector(".text");
// console.log(txt.parentNode);

// Getting the child element using first or last

// let parent = document.querySelector(".title");
// console.log(parent.firstElementChild);

// // Last child

// let parentt = document.querySelector(".title");
// console.log(parentt.lastElementChild);

// // ALL child nodes

// let paren = document.querySelector(".title");
// console.log(paren.childNodes);

// In these type we can also select the next and previous element using the properties

// Manipulating the existing html file.

let div = document.createElement("div");
div.innerHTML = "<p> Welcome to Js</p>";

div.className="title";
// document.body.appendChild(div)
console.log(div);

// It is used to add the file into a body of the html content. 