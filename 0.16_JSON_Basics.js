// JSON is an aronym for Javascipt Object Notation
// Nested arrays

var name = [["morgan", "chris", "gary","lisa"], ["jona","paul","kenn","aurora"]];
console.log(name[1][0]);

console.log("---------------------");

var items = [
	{
		"id": 1,
		"name": "green door",
		"price": 23.50,
		"tags":["home", "green","vynyl"]
	},

	{
		"id": 2,
		"name" : "red door",
		"price" : 12.50,
		"tags" : ["office","red","cheap wood"]
	},

	{
		"id": 3,
		"name" : "yellow door",
		"price" : 32.50,
		"tags" : ["school","yellow","premium wood"]
	}
];

console.log(items[0].tags[1]);

console.log("---------------------");


for (i=0;i < items.length; i++) {
	console.log(items[i].name);
}