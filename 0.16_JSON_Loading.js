// JSON - Javascript Object Notation is standard format for representing structured data as Javascript objects, which is commonly used for representing and transmitting data on websites
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// Can exist as object or string
// 1. As Object - when you want to read data of of JSON 
// 2. As String - when you want to send the JSON across the network

// Jason is basically a Javascript Object
// JSON can also be a valid arrays
// JSON is purley a data format
// Must be in double quotes 
// can validate using JSONLint


    var requestURL = 'http://cx.local/html/test/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      var superHeroesText = request.response;
      var superHeroes = JSON.parse(superHeroesText);
      populateHeader(superHeroes);
      showHeroes(superHeroes);
    }
    function populateHeader(jsonObj) {
      var myH1 = document.createElement('h1');
      myH1.textContent = jsonObj['squadName'];
      header.appendChild(myH1);
      var myPara = document.createElement('p');
      myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
      header.appendChild(myPara);
    }

// display the information

    function showHeroes(jsonObj) {
      var heroes = jsonObj['members'];
      
      for(i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        
        var superPowers = heroes[i].powers;
        for(j = 0; j < superPowers.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
      }
    }