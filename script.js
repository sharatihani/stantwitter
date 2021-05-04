let contentGridElement = document.getElementById('bodyArea');

let jsonDatabase = [
  {
    "time" : "3m ago",
    "username" : "ThisIsStanTwitter",
    "tweets" : ["welcome to stan twitter!"] 
  },
  {
    "time" : "1h ago",
    "username" : "pedropascalslover",
    "picture_url" : "images/pedro2.jpeg",
    "tweets" : ["I AM LITERALLY IN LOVE WITH THIS MAN PLEASE i would do anything for him"]
  },
  {
    "time" : "25m ago",
    "username" : "arisweetener",
    "tweets" : ["reply if you're an ari stan to be in a huge gc n make friends!!!"]
  },
  {
    "time" : "3h ago",
    "username" : "mochijimins",
    "picture_url" : "images/jimin.jpeg",
    "tweets" : ["love of my life and light of my life i love u sm"]
  },
  {
    "time" : "2h ago",
    "username" : "folklorianwoods",
    "tweets" : ["swifties follow me and let's be friends <3 "]
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
  AOS.init();
}

function createElement(incomingJSON) {

  // creates whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  newContentElement.setAttribute('data-aos', 'fade-down');
  newContentElement.setAttribute('data-aos-duration', '1500');


  // creates h3 headline for name, set class & set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTime');
  newContentHeading.innerText = incomingJSON['time'];
  // adds headline to the item
  newContentElement.appendChild(newContentHeading);

  // creates n adds list headline to item
  let newContentSubhead2 = document.createElement("H5");
  newContentSubhead2.innerText = "@" + incomingJSON["username"] + ":" ;
  newContentElement.appendChild(newContentSubhead2);

  // creates and adds list of "tweets" to item
  let newContenttweetsList = document.createElement("p");
  newContentElement.appendChild(newContenttweetsList);

  // creates & adds all the tweets list items to the tweets list
  for (var i = 0; i < incomingJSON['tweets'].length; i++) {
    var currenttweetsString = incomingJSON['tweets'][i];
    var newtweetsItem = document.createElement("p");
    newtweetsItem.innerText = currenttweetsString;
    newContenttweetsList.appendChild(newtweetsItem);
  }


  // creates and adds a footer image
  /* PROF NOTE: We do not need to loop through the database again- we're just
    checking the json of our one post, incomingJSON.
    Also: We switched from "OR" (||) to "AND" (&&) in our if statement. */
    if (incomingJSON["picture_url"] != "" && incomingJSON["picture_url"] != null){
      let newImage = document.createElement("IMG");
      newImage.classList.add("footerImage");
      newImage.src = incomingJSON['picture_url'];
      newContentElement.appendChild(newImage);
  // }
}


  // adds the item to the page
  contentGridElement.appendChild(newContentElement);
}
