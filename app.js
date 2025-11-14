
// CHAPTER 21-25





//  Question 1:

// Repeat Q1 using string concat() method.

// Answer 


// let first = prompt("Enter your first name");
// let last = prompt("Enter your last name");
// let fullName = first.concat(" ", last);
// alert("Hello " + fullName);



//  Question 2:


// Write a program to replace “Hyder” with “Islam” in the word “Hyderabad” and display the result.


// Answer 

// let city = "Hyderabad";
// let replaced = city.replace("Hyder", "Islam");
// document.write(replaced);



//  Question 3:



// Write a program to replace all occurrences of “and” in the following string with “&”.
// "Ali and Sami are best friends. They play cricket and football together."

// Answer 


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaced = message.replace(/and/g, "&");
// document.write(replaced);






//  Question 4:


// Write a program that converts the string "472" into the number 472 and display type before and after.

// Answer 


// let str = "472";
// let num = Number(str);

// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);




//  Question 5:

// Write a program that takes user input and converts it to uppercase.

// Answer 

// let input = prompt("Enter any text:");
// document.write(input.toUpperCase());





//  Question 6:

// Write a program that converts the first letter of the input to uppercase and the rest to lowercase.



// Answer 

// let text = prompt("Enter text:");
// let title = text[0].toUpperCase() + text.slice(1).toLowerCase();
// document.write(title);




//  Question 7:
 
// Write a program that converts 35.36 into "3536".



// Answer 

// var num = 35.36;
// var result = num.toString().replace(".", "");
// document.write(result);



//  Question 8:
 
// Write a program that takes username input.
// If it contains any of the following characters: @ . , ! → show:
// "Please enter a valid username"


// Answer 




// let username = prompt("Enter username:");
// let invalidChars = [33, 44, 46, 64]; // ! , . @

// for (let i = 0; i < username.length; i++) {
//     if (invalidChars.includes(username.charCodeAt(i))) {
//         alert("Please enter a valid username");
//         break;
//     }
// }





//  Question 9:
 


// Write a program to search a bakery item from the following array:
// ["cake","apple pie","cookie","chips","patties"]
// Tell the user if item is found + index number.




// Answer 

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let item = prompt("Search item:").toLowerCase();
// let index = A.indexOf(item);

// if (index !== -1) {
//     alert(item + " is available at index " + index);
// } else {
//     alert("We are sorry, " + item + " is not available");
// }



 

//  Question 10:


// Write a program to validate password using the following rules:

// It should not start with a number

// It must contain alphabets and numbers

// It must be at least 6 characters long


// Answer 


// let pass = prompt("Enter password:");

// if (!isNaN(pass[0])) {
//     alert("Password cannot start with a number");
// }
// else if (pass.length < 6) {
//     alert("Password must be at least 6 characters long");
// }
// else if (!/[A-Za-z]/.test(pass) || !/[0-9]/.test(pass)) {
//     alert("Password must contain both alphabets and numbers");
// }
// else {
//     alert("Valid password");
// }





//  Question 11:


// Write a program to convert the string:
// "University of Karachi"
// into an array using split() and display each element on a new line.

// Answer 

// var university = "University of Karachi";
// var arr = university.split(" ");

// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }




//  Question 12:


// Write a program to display the last character of user input.




// Answer 

// let input = prompt("Enter something:");
// let lastChar = input[input.length - 1];
// document.write("Last character: " + lastChar);




//  Question 13:


// Write a program that counts the occurrences of the word “the” in the given sentence:
// "The quick brown fox jumps over the lazy dog"




// Answer 

// let text = "The quick brown fox jumps over the lazy dog";
// let lower = text.toLowerCase();
// let count = (lower.match(/the/g) || []).length;
// document.write("Occurrences of 'the': " + count);










// CHAPTER 26-30






//  Question 1:

// Write a program that takes a positive integer from user & display the following:
// a) number
// b) round off value
// c) floor value
// d) ceil value




// Answer 


// let num = +prompt("Enter a positive integer:");

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");



//  Question 2:


// Write a program that takes a negative floating number & display:
// a) number
// b) round off value
// c) floor value
// d) ceil value


// Answer 

// let num = +prompt("Enter a negative floating number:");

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");




//  Question 3:



// Write a program that displays the absolute value of a number.



// Answer 


// let num = +prompt("Enter a number:");
// document.write("Absolute value of " + num + " is " + Math.abs(num));




//  Question 4:

// Write a program that simulates a dice using Math.random()




// Answer 


// let dice = Math.floor(Math.random() * 6) + 1;
// document.write("Random Dice Value: " + dice);










//  Question 5:


// Write a program that simulates a coin toss using random().



// Answer 


// let toss = Math.floor(Math.random() * 2) + 1;

// if (toss === 1) {
//     document.write("Random Coin Value: Heads");
// } else {
//     document.write("Random Coin Value: Tails");
// }








//  Question 6:


// Show a random number between 1 and 100.


// Answer 


// let num = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number between 1 and 100: " + num);






//  Question 7:


// Ask the user about his weight & parse the value. Possible inputs:
// 50, 50kgs, 50.2kgs, 50.2kilograms




// Answer 


// let weight = prompt("Enter your weight:");
// let parsedWeight = parseFloat(weight);

// document.write("Your weight is: " + parsedWeight + " kilograms");






//  Question 8:


// Store a secret number (1–10). Ask user to guess. If correct → congratulate.



// Answer 

// let secret = Math.floor(Math.random() * 10) + 1;
// let user = +prompt("Enter a number between 1 and 10:");

// if (user === secret) {
//     alert("Congratulations! You guessed the right number.");
// } else {
//     alert("Try again! The secret number was " + secret);
// }









