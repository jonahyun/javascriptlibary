$(document).ready(function() {
	$.ajax({
		dataType: "json",
		url: "http://swapi.co/api/people",
		success: function(data) {
			console.log(data.results.forEach(function(people) {
				console.log(people.name)
			}))
		}

	});
});