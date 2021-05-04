let contentGridElement = document.getElementById('bodyArea');

let jsonDatabase = [ 
  {
    "time" : "3m ago",
    "username" : "ThisIsStanTwitter",
    "picture_url" : "",
    "tweets" : ["give me likes and retweets now i need clout :( also why am I getting no interactions lately. do people hate me?"]
  },
  {
    "time" : "25m ago",
    "username" : "nostalgialipa",
    "picture_url" : "images/dualipa.jpeg",
    "tweets" : ["day 289 of trying to get dua to notice me. keep rt'ing my fancam y'all"]
  },
  {
    "time" : "3h ago",
    "username" : "swifties89",
    "tweets" : ["no one is interacting with me why does everyone hate me"]
  },
  {
    "time" : "2h ago",
    "username" : "nickithequeen",
    "picture_url" : "",
    "tweets" : ["like and rt my previous tweet please 🙏🙏🙏"]
  },
  {
    "time" : "2h ago",
    "username" : "sebstan_angelman",
    "picture_url" : "images/sebstan.jpeg",
    "tweets" : ["i would literally walk through the depths of hell for this man WHEN IS HE GOING TO NOTICE ME"]
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
