function line() {
	console.log("-----------------------------");
}

function hello() {	
	console.log("hello world");
}

hello();

line();


//adding parameter
function greeting(name) {
	console.log("Hello " + name);
}
greeting("jona");

line();


//making a function with return
function greeting(name) {
	return "Hey you, I'm using return:" + name;
}
console.log(greeting("Rick"));
var addGreeting = greeting("Jona") + ", how are you doing today?";
console.log(addGreeting);


line()
// calculate sales price/tax of iindiana
function calculatePriceIndiana(quantity, price) {
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;
	return totalPrice;
}
console.log("The total is:"  + calculatePriceIndiana(17, 5));


// adding number to function
function printNumber() {
	console.log(1);
}



printNumber();

line();

function sumNum() {
	var num1 = 4;
	var num2 = 6;
	console.log(num1 + num2);
}

//
function mulNum(num1, num2) {
	return num1 * num2;
}
console.log("mulNum: " + mulNum(3,4));
line();

//Passing parameters
function sumNum(num1,num2) {
	return num1 + num2;
}
console.log("sum num: " + sumNum(5,6));
 
line();

//built in function object example
var today = new Date();
console.log(today.toDateString());


line();
//

function checkOdd(num) {

}

function divByThree(num) {
	if (num % 3 === 0) {
		return "Number " + num + " is divisable by "
	}
}
console.log("Divide by Three: " + divByThree(5));


//challenge, create a personalize greeting for 2 names using afunction and a if statement

function personalGreeting(name) {
	if (name == "jona") {
		return "Hey " + name;
	} else if (name == "Jenn") {
		return "HOw are you doing today " + name2;
	} else {
		return "sorry, don't feel like talking";
	}

} 
console.log(personalGreeting());

line();


// Challenge Bronze - Two strings as a parameter
function gameConsole(console1,console2) {
	return console1 + " and " + console2;
}
console.log(gameConsole("xbox","ps4"));


// Challenge Silvef - calculate monthly bill
function monthlyBill(bill1, bill2, bill3) {
	var totalBill = bill1 + bill2 + bill2;
	return totalBill;
}
console.log("my total bill is: " + monthlyBill(100,200,300));

line();

// Challenge Gold - quantity, price, tax and 
function calculateTotal(quantity, price) {
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price; 
	return totalPrice;
}
console.log(calculateTotal(3,10));







