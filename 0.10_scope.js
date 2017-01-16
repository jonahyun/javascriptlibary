// Scopes

var name = "Jona";

function greetings() {
	var name = "ralph"; // local variable
	random = "bread"; //hoisting - makes the variable global.
	return name;
}

console.log(greetings());
console.log(name);
console.log(random);