 //task 1
 
 let name = "manikandan j";
 let location1 = "karaikal";
let age = "28";
   
console.log("My name is " +name);
console.log("iam " +age + " years old");
console.log("iam from " + location1);



//task 2//

let user = prompt("what is your name?");
alert("welcome to our page " + user);
let confirm1 = confirm("do u want to learn javascript?");

if (confirm1){
    alert(" Great Choice");
} else{
    alert("no problem");
}

//task 3

let password = "passwordd";
console.log(  "value: ", password,  "type: " , typeof(password));

let no1 = 1224;
console.log("value: ", no1 ,  "type: ", typeof(no1));

let pass = true;
console.log( "value: ", pass , "type: ", typeof(pass));

let nothing;
console.log("value: ", nothing ,  "type: ", typeof(nothing));

let check = null;
console.log("value: ", check ,  typeof(check));

// task 4

let colour = ["red", "blue", " white", "green", "black"];
console.log(colour[0]);
console.log(colour[colour.length-1]);
console.log(colour.length-1);
console.log(colour[0]);
console.log(colour[1]);
console.log(colour[2]);
console.log(colour[3]);
console.log(colour[4]);


//task 5

let subject = ["english" , "maths", "tamil" , "physics" , "chemistry"];
let user1 = prompt ("Enter the index number (0 - 4)");

console.log( subject [user1]);

// task 6

let studentDetails = {

    stud : "santosh" ,
    age : "28" ,
    course : "BE" ,
    skills : ["java", "sql", "phyton"] 
}

    console.log(studentDetails.stud);
    console.log(studentDetails.skills[1]);
    console.log (studentDetails.course);


//task 7


let product = {
    name: "Laptop",
    price: 45000,
    inStock: true
}
console.log(product.name);
console.log(product.price);

if (product.inStock) {
    console.log("available: yes");
} else {
    console.log("out of stock");
    
}

//task 8 

let fruits = {
    tropical : ["mango", "pineapple"],
    berries :["strawberry", "blueberry"],
    citrus : ["orange" , "lemon"] 
}

console.log(fruits.berries[1]);
console.log(fruits.tropical[0]);
console.log(fruits.citrus[1]);
console.log(Object.keys(fruits).length);





