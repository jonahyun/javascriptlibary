//Challenge:Bronze

var bigTen = 14
var myCrew = 6
var numberOfCats = 2
var luckyNumber = 3
var wifeAge = 32

var lottoNumber = (luckyNumber * myCrew * bigTen * wifeAge)
console.log("My favorite Pick 4 lotto number is: " + lottoNumber) 



//Challenge:Silver
var myNumber = 0
console.log("My Number: " + (myNumber += 10))
console.log("My Number: " + (myNumber -= 1))
console.log("My Number: " + (myNumber *= 9))
console.log("My Number: " + (myNumber /= 7))


//Challenge:Gold - Lifetime Supply

//Store you current age into avaiable
var currentAge = 40;
var maxAge = 85;
var numberOfGlass = 8;
var totalNeeded = (numberOfGlass * 365) * (maxAge - currentAge);
console.log("You will need " + totalNeeded + "glasses of water until rest of your life");
