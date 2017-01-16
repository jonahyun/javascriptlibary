var username = true;
var employee = true
var manager = false;
var admin = false;

if (username) {
  console.log("You're logged in!");
    if (admin) {
      console.log("This is the dashboard for your employee records you have master control.");
    } else if (manager) {
      console.log("This is the dashboard for your employee records, you can read but not create user");
    } else if (employee) {
      console.log("Please clock in");
    } 
} else {
  console.log("Please sign in");
}

line();
// Challenge: Silver

var patriots = 2;
var bengals = 2; 

if (patriots == bengals) {
  console.log("we are even!");
} else if (patriots > bengals) {
  console.log("Patriots you got lucky this year, next year we will destroy you!");
} else if (patriots < bengals) {
  console.log("We crushed you.")
} 



function line() {
  console.log("-----------");
}
