var nameOne = "paul";
var nameTwo = "gavin";
var nameThree = "verne";

// examples of arrays
var names = ["paul", "gavin", "verne", "lisa", "kenn"];
var nums = [1, 2, 3, 4, 5, 6, 545];
var mixed = ["dog", false, 6, "squirrel", 2];
console.log(names[2]);
console.log(nums[3]);
console.log(mixed[3]);

// can we use a for in loop to iterate and console log each name in names


for (name in names) {
	console.log(names[name]);
}

// create arrays of your favorite candy bars
var favCandy = ["snickers", "babe ruth"];

console.log(favCandy);

console.log("--------------------------");

console.log(favCandy[1]);

console.log("--------------------------");
favCandy.push("Peanut Butter Cups");

console.log(favCandy);

console.log(favCandy.slice(0,1));
