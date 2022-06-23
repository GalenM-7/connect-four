
state = {
  newGame: false,
  turn: null,
  players: [
    {
      player1: null,
      foreverChips: 2,
      destroyDiagonalChips: 1,
      destroyHorizontalChips: 1,
    },
    {
      player2: null,
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

function changePlayerHeadline( node, color, colorDescription) {
  node.innerHTML = "Player " + color;
  node.style.color = colorDescription
}


console.dir(colorsChoiceNodeP1);
console.dir(colorsChoiceNodeP2);

function clearStylingsP1( color ) {
  let child1 = colorsChoiceNodeP1.firstElementChild
  let child2 = child1.nextElementSibling
  let child3 = child2.nextElementSibling
  let child4 = child3.nextElementSibling
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
  let child1 = colorsChoiceNodeP2.firstElementChild
  let child2 = child1.nextElementSibling
  let child3 = child2.nextElementSibling
  let child4 = child3.nextElementSibling
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
    clearStylingsP1(state.players[0].player1);
    changePlayerHeadline( colorsPlayer1Heading , "Blue" , "blue") 
    state.players[0].player1 = "blue"
    console.dir(event.target.style.outline)
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break;
  case event.target.className === "colorCirclePurple":
    clearStylingsP1(state.players[0].player1);
    changePlayerHeadline( colorsPlayer1Heading , "Purple" , "purple") 
    state.players[0].player1 = "purple"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleGreen":
    clearStylingsP1(state.players[0].player1);
    changePlayerHeadline( colorsPlayer1Heading , "Green" , "green") 
    state.players[0].player1 = "green"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleRed":
    clearStylingsP1(state.players[0].player1);
    changePlayerHeadline( colorsPlayer1Heading , "Red" , "rgb(234, 10, 10)") 
    state.players[0].player1 = "red"
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
    clearStylingsP2(state.players[1].player2);
    changePlayerHeadline( colorsPlayer2Heading , "Blue" , "blue") 
    state.players[1].player2 = "blue"
    console.dir(event.target.style.outline)
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break;
  case event.target.className === "colorCirclePurple":
    clearStylingsP2(state.players[1].player2);
      changePlayerHeadline( colorsPlayer2Heading , "Purple" , "purple") 
    state.players[1].player2 = "purple"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleGreen":
    clearStylingsP2(state.players[1].player2);
    changePlayerHeadline( colorsPlayer2Heading , "Green" , "green") 
    state.players[1].player2 = "green"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleRed":
    clearStylingsP2(state.players[1].player2);
    changePlayerHeadline( colorsPlayer2Heading , "Red" , "rgb(234, 10, 10)") 
    state.players[1].player2 = "red"
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
  default:

 }

})

const nodeStartGame = document.getElementsByClassName("startGame");

nodeStartGame.addEventListener("click", function() {
  window.alert("click")
  if ( state.newGame === false && state.players[0].player1 !== null && state.players[1].player2 !== null && state.players[0].player1 !== state.players[1].player2) {
    window.alert("you started a game");
  } else {

  }
})

// clearStylingsP1()
