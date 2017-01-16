var footballTeam = "Bengals";

//for (i=0;i < footballTeam.length; i++)
for (var letter in footballTeam) {
	console.log(footballTeam[letter]);
}

console.log("--------------------------------");

//create a fo in loop that prints each letter of your fav sho

var show = "dexter";
for (var i in show) {
	console.log(show[i]);
}

console.log("--------------------------------");
// create a for in loop for your favorite food
// then can you count each vowels that occurs in that food?
// 1. we need a for in loops
// 2. use a conditional to check if the letter at an index is a vowel
// 3. ? == "a" || "e" || "i" || "o" || "u"
// 4. vowelCount = 0
var vowelCount = 0;
var food = "Del Seoul Korean Taco";
for (var vowels in food) {
	if (food[vowels] == "a" || food[vowels] == "e" || food[vowels] == "i" || food[vowels] == "o" || food[vowels] == "u" ) {
		console.log(food[vowels]);
		vowelCount++;
	}

}
console.log("THer are: " + vowelCount + " vowels");