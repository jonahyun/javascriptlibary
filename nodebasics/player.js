
// common pattern
module.exports = function() {
	return{
		name : "",
		life : 100,
		challenge : function(){
			console.log(this.name + " Fight Me!!");
		},

		screem : function() {
			console.log("Roar!");
		}

	}
	
}