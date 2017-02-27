// A closure give you access to the varaibles set in a function
// after the function has completed and returned

// Helps keep varaibles from getting pushed into global scope
// Degree of protection.  Variables can't be overwritten

var friend = {};

var setAge = function(myAge) {
	var birthday = "7/13/1980";
	return {
		getAge : function() {
			return myAge;
		},

		getBirthday : function () {
			return birthday;
		},

		setBirthday : function(birthday) {
			this.birthday = birthday;
		}
	}
}

friend.age = setAge(36;)
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.age.birthday);
cosnole.log(friend.age.getBirthday());
