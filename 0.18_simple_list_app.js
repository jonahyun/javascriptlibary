var newItemCounter = 1;
var ourButton = document.querySelector("#our-button");
var ourList = document.getElementById("our-list");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.querySelectorAll("#our-list li");
// older
// var listItems = document.getElementById("our-list").getElementsByTagName("li");


/*
Removing below because it does not handle new list item added. Replacing with
for (i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", activateItem);
}
*/

ourList.addEventListener("click", activateItem);


// when clicked on list item, it replaces header with what you clicked on
function activateItem(e) {
  if(e.target.nodeName == "LI") {
    ourHeadline.innerHTML = e.target.innerHTML;
    //for loop removes any class before making it active
    for (i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active"); //changes background color when clicked.
  }

}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
  ourList.innerHTML += "<li>Something " + newItemCounter + "</li>";
  newItemCounter++;
}
