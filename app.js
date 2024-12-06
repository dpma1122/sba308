//How do we assign a value to a variable?
let x = 39
//How do we change the value of a variable?
let y = 39;
y = 40;
console.log(y)
//How do we assign an existing variable to a new variable?
let firstname = "Danielle"
 firstname = "Danni"
 console.log (firstname)
 //Remind me, what are declare, assign, and define?
 // ---- declare- using a name to hold value ex: let = myName;
 //------ assign- putting something inside of backpack; giving the variable a specific value to store ex:  myName = Danielle;
 //------define- giving it variable and creating a name

 //What is pseudocoding and why should you do it?
 //----------pseudocode - its like a recipe to make cookies that easy to follow and understand, you don't put in the recipe open the oven and put the cookies inside, its already understood; you should use psuedocode for planning like a rough draft of your code in english not acutal code

 //What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 //------- It depends on the situation, I would approx. spend 50% of my time looking at the problem and the rest solving the problem. In looking at the problem I would use wireframing or psudeocode. 

 //B. Strings
    //Create a variable called firstVariable
    //Assign it the value of the string "Hello World"
    let firstVariable = "Hello, world!";
    //Change the value of this variable to some number
     firstVariable = 42;
     //Store the value of firstVariablein a new variable called secondVariable
     let secondVariable = firstVariable;
    //Change the value of secondVariableto any string.
     secondVariable = "I can do this";
    //What is the value of firstVariable?
            //42
    /*Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.*/
    let name2 = "Danielle";
     let greeting = "Hello, my name is ";
     console.log (greeting + name2);

     let greeting2 = "Hello, my name is " 
     let phrase = greeting2.concat("",name2)
     console.log(greeting2)
     //let greeting3 = `Hello, my name is ${name2}`
     //console.log(greetings3)

/*C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console*/

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name'==='Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  //console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. The farm
//Declare a variable animal. Set it to be either "cow" or something else//
let animal = "cat"
//Write code that will print out "mooooo" if it is equal to cow
 if (animal=== "cow"){
    console.log ("mooooo")
 }
//Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
else{
    console.log ("Hey! You're not a cow")
}
 
//E. Driver's Ed
//Make a variable that holds a person's age; be semantic
let personAge = 40
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (personAge > 16){
    console.log ( "Here are the keys!")
}
else if (personAge <16){
    console.log ("Sorry, you're too young")
}
/*II. Loops
: USE letwhen you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)*/

//A. The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <10; i++){
    console.log (i)
}

//Write a loop that will print out all the numbers from 10 up to and including 400
for(let a = 10; a<= 400; a++){
    console.log (a);
}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let x = 12; x<= 4000; x += 3) {
    console.log(x);
  }
//   B. Get even
//Print out the numbers that are within the range of 1 - 100
for(let c = 1; c <= 100; c++) {
    console.log(c);
}

//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let c = 2; c <= 100; c += 2) {
    console.log(c + " is an even number");
}

//C. Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let d = 1; d <100; d++){
    if (d % 5 === 0 )
        console.log ("I found a number " +d);
}
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let d = 1; d < 100; d++) {
    if (d % 5 === 0) {
        console.log("I found a number " + d);
    }
    if (d % 3 === 0) {
        console.log("I found a number " + d + " Three is a crowd");
    }
}

    //D. Savings account
    //Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    let bank_account = 0;
    for (let e = 1; e <= 10; e++) {
      bank_account += e;
    }
    console.log(bank_account);
 
//Check your work! Your bank_account should have $55 in it.

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

bank_account = 0;
for (d = 1; d < 101; d++){
	bank_account += d * 2;
};

//Check your work! Your bank_account should have $10,100 in it.

/*III. Arrays & Control flow



A. Talk about it:
What are the things in an array called?

//---- elements

Do Arrays guarantee those things will be in order?
//---when you add things inside of the element of an array they stay in the order that you specify

What real-life thing could you model with an array?*/
//-- a list of chores
//---let chores = ["Clean dishes", "Do laundry", "Take out trash", "Vacuum", "Dust"];


/* B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes*/

let quotes = ["I can do all things through Christ...", "Let us not become weary in well doing...", "...You reap what you sow"]

//C. Accessing elements
//Given the following array const randomThings = [1, 10, "Hello", true]

//How do you access the 1st element in the array?
 
return randomthings [0]; 

//Change the value of "Hello"to "World"
randomthings[0] = "Hello to World"
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();*/


/* D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]*/

//What would you write to access the 3rd element of the array?
return ourclass [3]
console.log( ourclass)

//Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";



//Add a new element, "Cloud City" to the array */

ourClass.push("Cloud City");
/* E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.*/

//Given the following array: const myArray = [5, 10, 500, 20]
//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
//Remove the 5from the beginning of the array.
//Add the string "Bob Marley"to the beginning of the array.
//Remove the string of your choice from the end of the array.
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?*/
myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();


/*F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.*/

let numberInput = 0;
if (numberInput < 100){
	console.log("little number");
} else {
	alert("big number");
}
numberInput = 80;
numberInput = 101;

/*
G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".*/

let monkeyNumber = 2;
if (monkeyNumber < 5){
	console.log("little number");
} else if (monkeyNumber > 10){
	console.log("big number");
} else {
	console.log("monkey");
}
monkeyNumber = 15;
monkeyNumber = 8;

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
const kristynShoe = kristynsCloset.shift();





//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(5, 0, "raybans"); 
// array.splice(start, deleteCount, item1, item2, ...)

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[4] = "stained knit hat";
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0];
//In the same way, access one item from Thom's pants array.
thomsCloset[1][1];
//Access one item from Thom's accessories array.
thomsCloset[2][1];
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!");
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

/*Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.*/

const printCool = (argument) => {
	return argument + " is cool";
};
console.log(printCool("Captain Reynolds"))
    
//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
 
const calculateCube = (singleNumber) => {
	return singleNumber * singleNumber * singleNumber;
};
console.log(calculateCube(4));

/*D. isVowel
Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.*/
const vowel = (letter) =>{
    letter=== "a" || letter === "e" || letter === "i" || character === "u"{
        return true; 
    } else {
        return false;
    }
};
console.log (letter ("e"));

//E. getTwoLengths
//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (string1, string2) => {
	const lengthArray = [string1.length, string2.length];
	return lengthArray;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));
/*Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.*/
const getMultipleLengths = (strArr) => {
	const multipleLengthArray = [];
	for (f = 0; f < strArr.length; f++){
		multipleLengthArray.push(strArr[f].length);
	};
	return multipleLengthArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


/*Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.*/

const maxOfThreethat = (num1, num2, num3) => {
    const aNumArray = [number1, number2, number3]; 
    aNumArray.sort (a, b) {return a-b}; 
    return aNumArray[4];
};
console.log (aNumArray (5,7,2));

//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (strArray) => {
	let longestWord = '';
	for (let g = 0; g < strArray.length; g++){
		if (strArray[g].length > longestWord.length){
			longestWord = strArray[g];
		}
	};
	return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

/*Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.*/
const user2 = {
	name: "Danielle",
	email: "123@yahoo.com",
	age: 40,
    purchased: clothes
};
 purchased = [];

 //Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
 const updatedEmail = "456@yahoo.com";
 console.log(updatedEmail);

//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
const originalAge = originalUser.age;
const newAge = originalAge++;
console.log(newAge);

//You have decided to add your user's location to the data that you want to collect.

//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
const user = {
	name: "Danielle",
	email: "123@yahoo.com",
	age: 40,
    purchased: clothes,
    location: Mexico,
}; console.log (location);