const turnIndicatorNode = document.getElementById("turnContainer");

window.addEventListener("load", () => {
  turnIndicatorNode.style.display = "none"
});

state = {
  newGame: false,
  turn: null,
  players: [
    {
      player1Color: null,
      player1Username: "Player 1",
      foreverChips: 2,
      destroyDiagonalChips: 1,
      destroyHorizontalChips: 1,
    },
    {
      player2Color: null,
      player2Username: "Player 2",
      foreverChips: 2,
      destroyDiagonalChips: 1,
      destroyHorizontalChips: 1,
    },
  ],
  gameBoard: [
    [
      { x: 1, y: 1, contents: "empty" },
      { x: 2, y: 1, contents: "empty" },
      { x: 3, y: 1, contents: "empty" },
      { x: 4, y: 1, contents: "empty" },
      { x: 5, y: 1, contents: "empty" },
      { x: 6, y: 1, contents: "empty" },
      { x: 7, y: 1, contents: "empty" },
    ],
    [
      { x: 1, y: 2, contents: "empty" },
      { x: 2, y: 2, contents: "empty" },
      { x: 3, y: 2, contents: "empty" },
      { x: 4, y: 2, contents: "empty" },
      { x: 5, y: 2, contents: "empty" },
      { x: 6, y: 2, contents: "empty" },
      { x: 7, y: 2, contents: "empty" },
    ],
    [
      { x: 1, y: 3, contents: "empty" },
      { x: 2, y: 3, contents: "empty" },
      { x: 3, y: 3, contents: "empty" },
      { x: 4, y: 3, contents: "empty" },
      { x: 5, y: 3, contents: "empty" },
      { x: 6, y: 3, contents: "empty" },
      { x: 7, y: 3, contents: "empty" },
    ],
    [
      { x: 1, y: 4, contents: "empty" },
      { x: 2, y: 4, contents: "empty" },
      { x: 3, y: 4, contents: "empty" },
      { x: 4, y: 4, contents: "empty" },
      { x: 5, y: 4, contents: "empty" },
      { x: 6, y: 4, contents: "empty" },
      { x: 7, y: 4, contents: "empty" },
    ],
    [
      { x: 1, y: 5, contents: "empty" },
      { x: 2, y: 5, contents: "empty" },
      { x: 3, y: 5, contents: "empty" },
      { x: 4, y: 5, contents: "empty" },
      { x: 5, y: 5, contents: "empty" },
      { x: 6, y: 5, contents: "empty" },
      { x: 7, y: 5, contents: "empty" },
    ],
    [
      { x: 1, y: 6, contents: "empty" },
      { x: 2, y: 6, contents: "empty" },
      { x: 3, y: 6, contents: "empty" },
      { x: 4, y: 6, contents: "empty" },
      { x: 5, y: 6, contents: "empty" },
      { x: 6, y: 6, contents: "empty" },
      { x: 7, y: 6, contents: "empty" },
    ],
  ],
};


const colorsChoiceNodeP1 = document.getElementById("colorsChooseP1");
const colorsChoiceNodeP2 = document.getElementById("colorsChooseP2");

const colorsPlayer1Heading = document.getElementById("player1ColorLabel");
const colorsPlayer2Heading = document.getElementById("player2ColorLabel");

const nodeUsernameBoxP1 = document.getElementsByClassName("userNameField")[0];
const nodeUsernameBoxP2 = document.getElementsByClassName("userNameField")[1];

const nodeInputDataP1 = document.getElementById("nodeInputP1");
const nodeInputDataP2 = document.getElementById("nodeInputP2");

const userNameBoxP1 = document.getElementById("usernameBoxP1");
const userNameBoxP2 = document.getElementById("usernameBoxP2");


function changePlayerHeadline( node, username) {
  if(username) {
    node.innerHTML = username;
  }
  // node.style.color = username
}

function changeDisplayUsername( node, username, usernameOriginal) {
  if(username !== usernameOriginal) {
    node.innerHTML = username;
  }
  // node.style.color = username
}



console.dir(colorsChoiceNodeP1);
console.dir(colorsChoiceNodeP2);

function clearStylingsP1( color ) {
  const child1 = colorsChoiceNodeP1.firstElementChild
  const child2 = child1.nextElementSibling
  const child3 = child2.nextElementSibling
  const child4 = child3.nextElementSibling
  if ( color === "red") {
    child1.style.outline = "";
    child1.style.marginLeft = ".25vw";
    child1.style.marginRight = ".25vw";
  } else if ( color === "blue") {
    child2.style.outline = "";
    child2.style.marginLeft = ".25vw";
    child2.style.marginRight = ".25vw";
  } else if ( color === "green" ) {
    child3.style.outline = "";
    child3.style.marginLeft = ".25vw";
    child3.style.marginRight = ".25vw";
  } else if ( color === "purple" ) {
    child4.style.outline = "";
    child4.style.marginLeft = ".25vw";
    child4.style.marginRight = ".25vw";
  } else {

  }

}

function clearStylingsP2( color ) {
  const child1 = colorsChoiceNodeP2.firstElementChild
  const child2 = child1.nextElementSibling
  const child3 = child2.nextElementSibling
  const child4 = child3.nextElementSibling
  if ( color === "red") {
    child1.style.outline = "";
    child1.style.marginLeft = ".25vw";
    child1.style.marginRight = ".25vw";
  } else if ( color === "blue") {
    child2.style.outline = "";
    child2.style.marginLeft = ".25vw";
    child2.style.marginRight = ".25vw";
  } else if ( color === "green" ) {
    child3.style.outline = "";
    child3.style.marginLeft = ".25vw";
    child3.style.marginRight = ".25vw";
  } else if ( color === "purple" ) {
    child4.style.outline = "";
    child4.style.marginLeft = ".25vw";
    child4.style.marginRight = ".25vw";
  } else {

  }

}


colorsChoiceNodeP1.addEventListener("click", function(event) {
    console.log("event.target.className");
  console.dir(event.target.className);
 switch ( state.newGame === false) {
  case event.target.className === "colorCircleBlue":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "blue" 
    state.players[0].player1Color = "blue"
    console.dir(event.target.style.outline)
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break;
  case event.target.className === "colorCirclePurple":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "purple" 
    state.players[0].player1Color = "purple"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleGreen":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "green" 
    state.players[0].player1Color = "green"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleRed":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "rgb(234, 10, 10)" 
    state.players[0].player1Color = "red"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
  default:

 }

})

colorsChoiceNodeP2.addEventListener("click", function(event) {
    console.log("event.target.className");
  console.dir(event.target.className);
 switch ( state.newGame === false) {
  case event.target.className === "colorCircleBlue":
    clearStylingsP2(state.players[1].player2Color);

    // changePlayerHeadline( colorsPlayer2Heading , "Blue" , "blue") 
    colorsPlayer2Heading.style.color = "blue" 
    state.players[1].player2Color = "blue"
    console.dir(event.target.style.outline)
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break;
  case event.target.className === "colorCirclePurple":
    clearStylingsP2(state.players[1].player2Color);
      // changePlayerHeadline( colorsPlayer2Heading , "Purple" , "purple")
    colorsPlayer2Heading.style.color = "purple" 
    state.players[1].player2Color = "purple"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleGreen":
    clearStylingsP2(state.players[1].player2Color);
    // changePlayerHeadline( colorsPlayer2Heading , "Green" , "green") 
    colorsPlayer2Heading.style.color = "green" 
    state.players[1].player2Color = "green"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleRed":
    clearStylingsP2(state.players[1].player2Color);
    // changePlayerHeadline( colorsPlayer2Heading , "Red" , "rgb(234, 10, 10)") 
    colorsPlayer2Heading.style.color = "rgb(234, 10, 10)" 
    state.players[1].player2Color = "red"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
  default:

 }

})

const nodeStartGame = document.getElementsByClassName("startGame")[0];
const nodePlayerSections = document.getElementsByClassName("playerSections");

function gameTransition( playerHeadlineNode, color, playerColorsNode ) {

state.newGame = true;

  nodePlayerSections[0].style.outline="4px solid black";

  // while(playerColorsNode.firstChild) {
      playerColorsNode.removeChild(playerColorsNode.firstElementChild)
      playerColorsNode.removeChild(playerColorsNode.firstElementChild)
      playerColorsNode.removeChild(playerColorsNode.firstElementChild)
      playerColorsNode.removeChild(playerColorsNode.firstElementChild)

  const toAttach = document.createElement("div");
  const toAttachShield2 = document.createElement("div");
  const toAttachDeathStraight = document.createElement("div");
  const toAttachDeathDiagonal = document.createElement("div");

  if ( color === "red") {
    toAttach.className = "colorCircleRedSmall";
    playerHeadlineNode.appendChild(toAttach);;
    toAttachShield2.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachShield2.className = "specialPieces";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathDiagonal.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathStraight.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);

    // playerColorsNode.firstElementChild.firstSibling.appendChild(toAttachDeathStraight);
    // playerColorsNode.appendChild(toAttackDeathDiagonal);

    // child1.style.marginLeft = ".25vw";
    // child1.style.marginRight = ".25vw"
  } else if ( color === "blue") {
    toAttach.className = "colorCircleBlueSmall";
    playerHeadlineNode.appendChild(toAttach);
    toAttachShield2.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachShield2.className = "specialPieces";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathDiagonal.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathStraight.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else if ( color === "green" ) {
    toAttach.className = "colorCircleGreenSmall";
    playerHeadlineNode.appendChild(toAttach);
    toAttachShield2.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachShield2.className = "specialPieces";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathDiagonal.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathStraight.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else if ( color === "purple" ) {
    toAttach.className = "colorCirclePurpleSmall";
    playerHeadlineNode.appendChild(toAttach);
    toAttachShield2.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachShield2.className = "specialPieces"; 
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathDiagonal.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.style.backgroundImage.src="circleImageShieldBlue.png"
    toAttachDeathStraight.className = "specialPieces"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else {

  }

}
// const nodeTextBoxP2 = document.getElementsByClassName("userNameField")[1];

// console.log(nodeTextBoxP1)
// console.dir(nodeTextBoxP1)

// const nodeTextBox = document.getElementById("userNameFieldBox");
// const nodeSubmitButton = document.getElementsByClassName("submitButton")
console.log("colorsChoiceNodeP1.firstChild")      
console.dir(colorsChoiceNodeP1.firstChild)  

nodeStartGame.addEventListener("click", function() {
  window.alert("click")
  if ( state.newGame === false && state.players[0].player1Color !== null && state.players[1].player2Color !== null && state.players[0].player1Color !== state.players[1].player2Color) {
    window.alert("you started a game");
      userNameBoxP1.style.display = "none";
      userNameBoxP2.style.display = "none";

      gameTransition( colorsPlayer1Heading, state.players[0].player1Color, colorsChoiceNodeP1 );
      gameTransition( colorsPlayer2Heading, state.players[1].player2Color, colorsChoiceNodeP2 )
       
  } else {

  }
});

nodeUsernameBoxP1.addEventListener("click", function(event) {
    // window.alert("click");
    console.dir(event.target)
      console.log("state.players[0].username")
      console.log(state.players[0].player1Username)

    console.log(state.players[0].player1Username)
    if ( nodeInputDataP1.value.length < 10 && state.newGame === false ) {
      state.players[0].player1Username = nodeInputDataP1.value;
      console.log(state.players[0].player1Username);
      changePlayerHeadline( colorsPlayer1Heading, state.players[0].player1Username);
      // userNameBoxP1.style.display = "none" 
    } 
 
})

nodeUsernameBoxP2.addEventListener("click", function() {
    if ( nodeInputDataP2.value.length < 10 && state.newGame === false
       ) {
      state.players[1].player2Username = nodeInputDataP2.value;
      console.log(state.players[1].player2Username);
      changePlayerHeadline( colorsPlayer2Heading , state.players[1].player2Username);
      // changeDisplayUsername( userNameBoxP2, state.players[1].username, "Player 2")

    } 
      // state.players[1].username = nodeInputDataP2.value;
      console.log(state.players[1].player2Username);
})




// clearStylingsP1()
