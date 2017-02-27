// Immediately INvoked Functional Expression
//

//Create a greeting function - take name parmeter
// and it shoud print Hello + name


//This is called a functional expression
var greeting = function(name) {
	console.log("Hello " + name);
} ("Aurora")



//anonymous function
(funciton(value)) {
	console.log(value)
})(15)


var myIIFE = (function() {
	var privaterVar = "secret";

	return {
		reveal: function() {
			console.log(privateVar);
		}
	}
})
console.log(myIIFE.privateVar);
