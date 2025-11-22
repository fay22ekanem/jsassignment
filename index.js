//Assignment on Js

22 //expressions

// 1. arithmetic operator

// addition
//let age = 120 + 5;
//console.log(age);
// substraction
//let myage = '10' - '5';
// console.log(myage);
// division
// let yourage = 6 / 2;
// console.log(yourage);
// // multiplication
// let hisage = 5 * 5;
// console.log(hisage);
// // modulus
// let herage = 10 % 3;
// console.log(herage);
// // exponentiation
// let theirage = 2 ** 3;
// console.log(theirage);

// // 2. assignment operator

// let x = 10;
// x += 5; // x = x + 5
// console.log(x);
// x -= 3; // x = x - 3
// console.log(x);
// x *= 2; // x = x * 2
// console.log(x);
// x /= 4; // x = x / 4
// console.log(x); 

// // 3. comparison operator
// let a = 10;
// let b = 20;

// // equal to
// console.log(a == b); 
// // not equal to
// console.log(a != b);
// // greater than
// console.log(a > b);
// // less than
// console.log(a < b);
// // greater than or equal to
// console.log(a >= b);
// // less than or equal to
// console.log(a <= b);
// //=== strict equal to
// console.log(a === b);

// // 4 logical operator
// let p = true;
// let q = false;

// // AND operator
// console.log(p && q);
// // OR operator
// console.log(p || q);
// // NOT operator
// console.log(!p);


// // 5. string operator

// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // 6. number operator

// let num1 = 15;
// let num2 = 4;
// let sum = num1 + num2;
// console.log(sum);


// const students = [
//     { name: "Gift", score: 85 },
//     { name: "Sharon", score: 40 },
//     { name: "Rose", score: 72 },
//     { name: "Favour", score: 50 },
//     { name: "Beauty", score: 56 },
// ];

// const newStudents = students.map((student) => {
//     return student.name;
// });

// console.log(newStudents)

// const passedStudents = students.filter((student) => {
//     return student.score > 50;
// });
// console.log(newStudents)
// console.log(passedStudents)

// const totalScore = students.reduce((sum, students) => sum + students.score, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore)

// for (let i = 0; i < students.length; i++) {
//     console.log("Name: " + students[i].name + ", Score:" +
//         students[i].score);
// }

// for (let i = 0; i < students.length; i++) {
//     let grade;
//     let score = students[i].score;

//     if (score >= 80) {
//         grade = "A"
//     } else if (score >= 70) {
//         grade = "B"
//     } else if (score >= 60) {
//         grade = "C"
//     } else if (score >= 50) {
//         grade = "D"
//     } else {
//         grade = "F"
//     }
//     console.log("Name: " + students[i].name + ", Score: " + score + ",Grade: " + grade);}

// const name = "Favour";
// const year = "2003";
// const age = 22;
// const isAlive = true;

// //console.log(Hi! My name is Favour, I am 22 years old, I was born in the year 2003, and my living state is true.)  
// console.log()

// const name = "Favour"
// const year = "2003"
// const age = 22
// const isAlive = true 

// console.log("Hi, My name is " +   name +  ", I am " + age + " years old, I was born in the year " + year  +  ", and my living state is " +   isAlive + "."  )

//firstName, middleName, lastName, fullName
// const firstname = "Favour"
// const middlename = "Enotobong"
// const lastname = "Ekanem"
// const fullname = firstname + " " + middlename + " " + lastname

// console.log (fullname)
// create variables for this output: My car is a 2025 Tesla, the color is blue and the number plate is 420POW314

// const carname = "Tesla"
// const year = 2025
// const color = "blue"
// const platenumber = "420POW314"

// console.log ("My car is a " + year + " Tesla, the color is " + color + " and the number plate is " + platenumber) 

// Using the Shorthand (+= operator)
// Loading: 100% complete.

// statusMessage, progress

// let statusmessage = "loading: "
// let progress = 0

// for (let i = 0; i <= 100; i += 10){
//     progress = i; 
//     statusmessage += progress + "%" ;
//     console.log (statusmessage)
// }
// statusmessage += "complete";
// console.log (statusmessage)

const pictures =[ 
    "./images/img1-min.jpg",
    "./images/img2-min.jpg",
    "./images/img3-min.jpg",
    "./images/img4-min.jpg"
];

let current = 0;

const slide = document.getElementById("slide");

function showImage() {
  slide.src = pictures[current];
}

function nextImage() {
  current++;
  if (current >= pictures.length) {
    current = 0; 
  }
  showImage();
}

function prevImage() {
  current--;
  if (current < 0) {
    current = pictures.length - 1;
  }
  showImage();
}

setInterval(nextImage, 4000);

slide.addEventListener("click", nextImage);

document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);

showImage();


