//indexing
// to access the indesx we use [] and index number inside of them
//DRY - Don't Repeat Yourself
//WET - Write Everyting
var name = "Jona Hyun";
console.log(name.length);
console.log(name[1]);
console.log(name[0].toLowerCase() + name[1] + name[2].toUpperCase() + name[3]);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

//while loop
var lcv = 0; //loop control variable
while(lcv < 3) {
	console.log(name.toUpperCase());
	lcv += 1; // This is Critical!!!! No Var leads to infinity loop
}


//create a while loop that starts at zero and ends at 10
//this while loop should print each number of the lcv
//make your lcv count = 0

var count = 0;
while(count <= 10) {
	console.log(count);
	count++;
}

console.log("------------------------");

var num = 10;
while (num > 0) {
	console.log(num)
	num --
}


console.log("------------------------");

// increment by 2
var evenCount = 0;
while(evenCount <= 20) {
	console.log(evenCount);
	evenCount += 2;
}

console.log("------------------------");

var evenCount2 = 2;
while (evenCount2 < 20) {
	if (evenCount2 % 2 == 0) {
		console.log(evenCount2 + " is even");
	} else {
		console.log(evenCount2 + " is odd");
	}
	evenCount2++;
}

console.log("------------------------");

//cerate a while loop tha will count to 50 by 5s

var countFive = 0;
while (countFive <= 50) {
	console.log(countFive);
	countFive += 5;
}	



