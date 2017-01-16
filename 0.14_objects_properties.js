
//Empty Ojbect Literal
var emptyObject = {};


//Object with Properties
var facebookFriend = {
	name 			: "",
	age				: 0,
	vocation 		: "", 
	inRelationship	: true
};

facebookFriend.name = "Jona"; // dot operator is a accesser
console.log(facebookFriend.name);

facebookFriend.age = 40;
console.log(facebookFriend.age);
console.log(facebookFriend.name + " just turned " + facebookFriend.age + ".");


facebookFriend.inRelationship = true;
if(facebookFriend.inRelationship) {
	console.log(facebookFriend.name + " is in a inRelationship");
}

facebookFriend.name = "Kenn";
console.log(facebookFriend.name);


//create your own class
var myCar = {
	make		: "",
	model		: 0,
	year		: 0,
	operational : true 
}


myCar.make = "Infinity";
myCar.model = "G35";
myCar.year = 1991;

console.log("My Car is: " + myCar.make + " " + myCar.model + " " + myCar.year );




