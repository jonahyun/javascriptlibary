var firstName = "jona";
var age = 40;
var message = firstName + ": " + age;
// console.log(firstName + ": " + age);

//typeof will return what type of number of string
console.log(typeof message);

// quotes?
var lastName = 'hyun';
console.log(typeof lastName)


var greetings = 'Kenn says "How\'s your day?"'; 


//string methods
console.log(greetings.length);
console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());

console.log(greetings.split(" "));
console.log(greetings.slice(1));


//Challenge Bronze
var highSchool = "SCPA";
var graduation = "1995";
console.log("I graduated from " + highSchool + " in " + graduation);

//Challenge: Silver
var make = "Infinity";
var model = "G35";
var year = 2003;
var myCar = make + " " + model + " " + year;
console.log("My Car is " + myCar);

//Challenge: Gold
var age = 40;
if (age > 18) {
	console.log("You are an adult");
} else {
	console.log("You are a minor");
}

