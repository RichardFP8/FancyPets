"use strict";
let pets = [
    {
       name: "Rubby",
       type: "Dog",
       breed: "Corgi",
       bestTrick: "Tug of war",
       image: "images/rubby.jpg"
    }, {
       name: "Howdy",
       type: "Dog",
       breed: "Mixed Breed",
       bestTrick: "Go find it!",
       image: "images/howdy.jpg"
    }, {
       name: "KitKit",
       type: "Cat",
       breed: "American Shorthair",
       bestTrick: "Commanding his owner to feed him",
       image: "images/kitkit.jpg"
    }, {
       name: "Lil' Miss",
       type: "Cat",
       breed: "Tabby",
       bestTrick: "Looking aloof",
       image: "images/lilmiss.jpg"
    }, {
       name: "Happy",
       type: "Dog",
       breed: "Golden Retriever",
       bestTrick: "Refusing to retrieve!",
       image: "images/happy.jpg"
    }, {
       name: "Piper",
       type: "Dog",
       breed: "Beagle",
       bestTrick: "Find it!  Dropped food edition!",
       image: "images/piper.jpg"
    }, {
       name: "Spooky",
       type: "Cat",
       breed: "Mixed",
       bestTrick: "Gymnastics!",
       image: "images/spooky.jpg"
    }
];
window.onload = () => {
    pets.forEach(createCard);
}
function createCard(pet){
    const getMainElement = document.querySelector(".row");
    //create all the elements for the car
    let mainCard = document.createElement("div");
    let theImage = document.createElement("img"); 
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");

    //order; have the document flow
    mainCard.appendChild(theImage);
    mainCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText); 

    //add the attributes
    mainCard.classList.add("card");
    mainCard.classList.add("my-5");
    mainCard.style.width = "18rem";
    mainCard.style.display = "inline-block";

    theImage.src = "./" + pet.image;
    theImage.style.maxWidth = "350px";
    theImage.style.width = "100%";
    theImage.style.height = "250px";
    theImage.style.objectFit = "cover";
    theImage.className = "card-img-top";

    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    cardTitle.innerHTML = pet.name;
    cardText.className = "card-text";
    cardText.innerHTML = `Obviously a ${pet.type} of the breed ${pet.breed} who's best trick is: ${pet.bestTrick}`;


    //make the card component a child of an element
    getMainElement.appendChild(mainCard);
   
}