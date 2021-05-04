let contentGridElement = document.getElementById('bodyArea');

let jsonDatabase = [
  {
    "time" : "3m ago",
    "username" : "ThisIsStanTwitter",
    "tweets" : ["hello <3 join the stan twt community! let's be friends"]
  },
  {
    "time" : "25m ago",
    "username" : "queenariana101",
    "picture_url" : "images/arihearts.jpeg",
    "tweets" : ["ari stans i love making new friends on here ur all so nice ily <3"]
  },
  {
    "time" : "25m ago",
    "username" : "darklinashadow",
    "tweets" : ["just made a gc for s&b stans! reply to join and we can be bffs"]
  },
  {
    "time" : "1h ago",
    "username" : "buckys_arm",
    "tweets" : ["i'm so happy that i met all of u thanks for making my days better"]
  },
  {
    "time" : "2h ago",
    "username" : "goddessjisoo",
    "tweets" : ["twt blinks are the best i love you all!!!"]
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


  // creates h3 headline for time, set class & set content
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
