// I COULD NOT MANAGE TO FINISH ALL THE TASKS BECAUSE OF START LATE :(
/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/

let test = "Ali Mukhto"
console.log(test);


// =====================================================

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/


let a = 10
let b = 20
let result = a + b
console.log("The result of addition is : " + result);


// ================================================

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20)
console.log(random);


// =====================================================

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
  name: "Ali",
  surname: "Mukhtor",
  age: 22
}
console.log(me);



// =====================================================


/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age
console.log(me);


// ======================================================

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

me.skills = ["JavaScript", "HTML", "CSS"]
console.log(me);


// ==============================================================

/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
me.skills.pop()
console.log(me);


// ======================================================

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/

let dice = function(n){
  let randomNum = Math.floor(Math.random() * 6)
  return "Printing random numbers between 0 and 6 : " +  randomNum
}
console.log(dice());

// =================================================


/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/


let whoIsBigger = function(num1, num2){
  if(num1 > num2){
    return "The biggest one is : " + num1
  }else if(num2 > num1){
    return "The biggest one is : " + num2
  }else{
    return "u sucked :) "
  }
}
console.log(whoIsBigger(3, 2));


// ============================================


/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

let splitMe = function(splitString){
  let resultSplitString = splitString.split([" "])
  return resultSplitString
}
console.log(splitMe("I love coiding"));


// =====================================================

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
// ////???????????????????????????????????????????????????????????????
// let deleteOne = function(string1, isMale){
//     isMale = string1
//   if(isMale === string1){
//     return string1.replace(1)
//   }else{
//     return string.replace(string1.length-1)
//   }
// }
// console.log(deleteOne("Ali", "Ali"));



// ========================================================


/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/

let onlyLetters = function(string1){
  let removeDigits = string1.replace(/[0-9]/g, '')
  return removeDigits
}
console.log(onlyLetters("i have 4 dogs"));


// ==============================================

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

let isThisAnEmail = function(adressEmail){
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(adressEmail.match(validEmail)){
    return true
  }else{
    return "Sorry u r sucked :)"
  }
}
console.log(isThisAnEmail("+-09@gmail"));
// ==============================================

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/


const whatDayIsIt  = new Date();
const days = whatDayIsIt.getDay();
if(days == 1){
  console.log("Today is : Monday");
}else if(day1 === 2){
  console.log("Today is : Tuesday");
}else if(day1 === 3){x
  console.log("Today is : Wednesday");
}else if(day1 === 4){
  console.log("Today is : Thursday");
}else if(day1 === 5){
  console.log("Today is : Friday");
}else if(day1 === 6){
  console.log("Today is : Saturday");
}else if(day1 === 0){
  console.log("Today is : Sunday");
}

//==========================================================

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

let days_passed = function(dt) {
  var current = new Date(dt.getTime());
  var previous = new Date(dt.getFullYear(), 0, 1);

  return Math.ceil((current - previous + 1) / 86400000);
}
console.log(days_passed(new Date(2021, 12, 1)));
// console.log(days_passed(new Date(2021, 11, 14)));
