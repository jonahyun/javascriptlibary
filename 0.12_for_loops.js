for (var lcv = 1; lcv <= 10;lcv++) {
	console.log(lcv);
}

var name = "Potato";
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

console.log("-------------------------")

for (lcv=0;lcv < name.length; lcv++) {
	console.log(name[lcv]); //console.log(name[0]) and then [this number is increased by one each time]
}

console.log("-------------------------")
//Create animal variable and use a for loop to console.og each letter of your fav animal.

var animal = "tiger";
for (i=0;i < animal.length;i++) {
	console.log(animal[i]);
}