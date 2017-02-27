var player = require('./player.js');
var test = require('./test.js');

var jona = player();
jona.challenge();

console.log("-------------------");

var chris = player();
chris.challenge();


var lion = test();
lion.name = "Meany";
