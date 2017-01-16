// Oject Literals with Methods
// Function inside of an object

var player = {
	//Properties - goes on top
	name		: "",
	life 		: 100,
	damage		: 0,

	//Methods - down below
	challenge	: function() {
		console.log(this.name + " says: Would anyone care to fight????");
	},
	response	: function() {
		console.log(this.name + " says: Yes, I would like to fight!");
	},
	attack		: function(target) {
		console.log(this.name + " says: I'm throwing thie fist and does " + target.name + " and does " + this.damage + " points of damage!");
	}
}

var melkor = Object.create(player);
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "miley";

//Access methods
melkor.challenge();
miley.response();
miley.attack(miley);

console.log("------------------------")

//new object
var student = {
	//properties
	name		: "",
	age			: "",
	grade		: "",
	attendance	: true,

	//method
	day 	: function() {
		console.log("")
	}
}

var = 
