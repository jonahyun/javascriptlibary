var isOn = true;  // starting with 'is' is a common convention for variables
var isHot = true;

//1

if(isOn === true) {
	console.log("This light is on. It's too bright, dude.");
} 

if(isOn) {
	console.log("Dude, turn that music off.");
}

// && = and
if(isOn && isHot) {
	console.log("Dude, that music on, and it is so Hot");
}

// || = or

if(isOn || isHot) {
	console.log("That music is on, it's loudn, and it's not hot");
}

// ! = not
if(!isHot) {
	console.log("It is not hot.");
}