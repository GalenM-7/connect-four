const turnIndicatorNode = document.getElementById("turnContainer");
// const getAllTDElements = document.getElementsByTagName("td");
const dropNode = document.getElementById("dropRow");
const row1Node = document.getElementById("row1");
const row2Node = document.getElementById("row2");
const row3Node = document.getElementById("row3");
const row4Node = document.getElementById("row4");
const row5Node = document.getElementById("row5");
const row6Node = document.getElementById("row6");


// window.addEventListener("load", () => {
//   turnIndicatorNode.style.display = "none"
// });

state = {
  newGame: false,
  turn: null,
  turnColor: null,
  turnColorClass: null,
  players: [
    {
      player1Color: null,
      player1Username: "Player 1",
      player1ColorClass: null,
      foreverChips: 2,
      destroyDiagonalChips: 1,
      destroyHorizontalChips: 1,
    },
    {
      player2Color: null,
      player2Username: "Player 2",
      player2ColorClass: null,
      foreverChips: 2,
      destroyDiagonalChips: 1,
      destroyHorizontalChips: 1,
    },
  ],
  gameBoardColumns: 7,
  gameBoardRows: 6,
  animation: false,
  toWin: 4,
  // animationDropPhase: 1,
  // animationEnd: 7,
  gameBoard: [
    [
      { x: 0, y: 0, contents: "empty" },
      { x: 0, y: 1, contents: "empty" },
      { x: 0, y: 2, contents: "empty" },
      { x: 0, y: 3, contents: "empty" },
      { x: 0, y: 4, contents: "empty" },
      { x: 0, y: 5, contents: "empty" },
      { x: 0, y: 6, contents: "empty" },
    ],
    [
      { x: 1, y: 0, contents: "empty" },
      { x: 1, y: 1, contents: "empty" },
      { x: 1, y: 2, contents: "empty" },
      { x: 1, y: 3, contents: "empty" },
      { x: 1, y: 4, contents: "empty" },
      { x: 1, y: 5, contents: "empty" },
      { x: 1, y: 6, contents: "empty" },
    ],
    [
      { x: 2, y: 0, contents: "empty" },
      { x: 2, y: 1, contents: "empty" },
      { x: 2, y: 2, contents: "empty" },
      { x: 2, y: 3, contents: "empty" },
      { x: 2, y: 4, contents: "empty" },
      { x: 2, y: 5, contents: "empty" },
      { x: 2, y: 6, contents: "empty" },
    ],
    [
      { x: 3, y: 0, contents: "empty" },
      { x: 3, y: 1, contents: "empty" },
      { x: 3, y: 2, contents: "empty" },
      { x: 3, y: 3, contents: "empty" },
      { x: 3, y: 4, contents: "empty" },
      { x: 3, y: 5, contents: "empty" },
      { x: 3, y: 6, contents: "empty" },
    ],
    [
      { x: 4, y: 0, contents: "empty" },
      { x: 4, y: 1, contents: "empty" },
      { x: 4, y: 2, contents: "empty" },
      { x: 4, y: 3, contents: "empty" },
      { x: 4, y: 4, contents: "empty" },
      { x: 4, y: 5, contents: "empty" },
      { x: 4, y: 6, contents: "empty" },
    ],
    [
      { x: 5, y: 0, contents: "empty" },
      { x: 5, y: 1, contents: "empty" },
      { x: 5, y: 2, contents: "empty" },
      { x: 5, y: 3, contents: "empty" },
      { x: 5, y: 4, contents: "empty" },
      { x: 5, y: 5, contents: "empty" },
      { x: 5, y: 6, contents: "empty" },
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
    state.players[0].player1Color = "blue";
    state.players[0].player1ColorClass = "colorChipBlue";
    console.dir(event.target.style.outline)
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break;
  case event.target.className === "colorCirclePurple":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "purple" 
    state.players[0].player1Color = "purple";
    state.players[0].player1ColorClass = "colorChipPurple";
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleGreen":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "green" 
    state.players[0].player1Color = "green"
    state.players[0].player1ColorClass = "colorChipGreen";
    event.target.style.outline = "3px solid black"
    event.target.style.marginLeft = "1vw"
    event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleRed":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "rgb(234, 10, 10)" 
    state.players[0].player1Color = "red"
    state.players[0].player1ColorClass = "colorChipRed";
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
    colorsPlayer2Heading.style.color = "blue";
    state.players[1].player2Color = "blue";
    state.players[1].player2ColorClass = "colorChipBlue";
    console.dir(event.target.style.outline);
    event.target.style.outline = "3px solid black";
    // event.target.style.marginLeft = "1vw";
    // event.target.style.marginRight = "1vw";
  break;
  case event.target.className === "colorCirclePurple":
    clearStylingsP2(state.players[1].player2Color);
      // changePlayerHeadline( colorsPlayer2Heading , "Purple" , "purple")
    colorsPlayer2Heading.style.color = "purple" 
    state.players[1].player2Color = "purple"
    state.players[1].player2ColorClass = "colorChipPurple";
    event.target.style.outline = "3px solid black"
    // event.target.style.marginLeft = "1vw"
    // event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleGreen":
    clearStylingsP2(state.players[1].player2Color);
    // changePlayerHeadline( colorsPlayer2Heading , "Green" , "green") 
    colorsPlayer2Heading.style.color = "green" 
    state.players[1].player2Color = "green"
    state.players[1].player2ColorClass = "colorChipGreen";
    event.target.style.outline = "3px solid black"
    // event.target.style.marginLeft = "1vw"
    // event.target.style.marginRight = "1vw"
  break; 
    case event.target.className === "colorCircleRed":
    clearStylingsP2(state.players[1].player2Color);
    // changePlayerHeadline( colorsPlayer2Heading , "Red" , "rgb(234, 10, 10)") 
    colorsPlayer2Heading.style.color = "rgb(234, 10, 10)" 
    state.players[1].player2Color = "red";
    state.players[1].player2ColorClass = "colorChipRed";
    event.target.style.outline = "3px solid black"
    // event.target.style.marginLeft = "1vw"
    // event.target.style.marginRight = "1vw"
  break; 
  default:

 }

})

const nodeStartGame = document.getElementsByClassName("startGame")[0];
const nodePlayerSections = document.getElementsByClassName("playerSections");

function gameTransition( playerHeadlineNode, color, playerColorsNode ) {

state.newGame = true;


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
    toAttachShield2.className = "specialPiecesShield";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkull"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkull"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);

    // playerColorsNode.firstElementChild.firstSibling.appendChild(toAttachDeathStraight);
    // playerColorsNode.appendChild(toAttackDeathDiagonal);

    // child1.style.marginLeft = ".25vw";
    // child1.style.marginRight = ".25vw"
  } else if ( color === "blue") {
    toAttach.className = "colorCircleBlueSmall";
    playerHeadlineNode.appendChild(toAttach);
    toAttachShield2.className = "specialPiecesShield";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkull"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkull"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else if ( color === "green" ) {
    toAttach.className = "colorCircleGreenSmall";
    playerHeadlineNode.appendChild(toAttach);
    toAttachShield2.className = "specialPiecesShield";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkull"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkull"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else if ( color === "purple" ) {
    toAttach.className = "colorCirclePurpleSmall";
    playerHeadlineNode.appendChild(toAttach);
   toAttachShield2.className = "specialPiecesShield";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkull"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkull"; 
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
       
      let randomNumber = Math.floor(Math.random() * 10);

      if ( randomNumber % 2 === 0) {
        state.turn = state.players[0].player1Username;
        state.turnColor = state.players[0].player1Color;
        nodePlayerSections[0].style.outline="4px solid " + state.players[0].player1Color;
      } else {
        state.turn = state.players[1].player2Username;
        state.turnColor = state.players[1].player2Color;
        nodePlayerSections[1].style.outline="4px solid " + state.players[1].player2Color;
      }

      if ( state.turnColor === "red" ) {
          state.turnColorClass = "colorChipRed"
      } else if (state.turnColor === "purple") {
          state.turnColorClass = "colorChipPurple"
      } else if (state.turnColor === "green") {
          state.turnColorClass = "colorChipGreen"
      } else {
          state.turnColorClass = "colorChipBlue"
      }

  } else {

  }
  console.log("state")
    console.log(state)

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
});

// console.log("getAllTDElements");
// console.log(getAllTDElements);
// console.dir(getAllTDElements[20].attributes.xcoordinate.value);
let getlist= [...row1Node.childNodes]
    console.dir(getlist[5].attributes.ycoordinate.value );



function checkDiagonalBottomRight(){
  // for ( let i = state; i < 0; i++) {

  // }
}

function checkDiagonalBottomLeft(){
  // let startingPosition = state.gameBoardColumns - state.toWin;
  console.log("gameBoardColumns");
    console.log(state.gameBoardColumns)
    window.alert("482 trig");
    let toCheckArray = [];
    let bottomRow = state.gameBoardRows - 1;
    let finalColumn = state.gameBoardColumns;
  for ( let i = state.gameBoardRows; i > 0; i--) {
          finalColumn--
        
      for ( let j = 0; j < state.gameBoardColumns; j++) {
        // let checkIndividualElement;

        if ( bottomRow - j < 0 || finalColumn - j === state.gameBoardColumns) {
          console.log("///////////// break loop //////////////")
          break
        } else {
            console.log("state");
            console.log(state);
            // if ( state.gameBoard[bottomRow - j][finalColumn + j] === state.turnColor){
            if ( state.gameBoard[bottomRow - j][finalColumn + j] !== state.turnColor && state.gameBoard[bottomRow - j][finalColumn + j] !== "empty"){
            toCheckArray.push("success");
          } else {
            toCheckArray = [];
          }
          if ( toCheckArray.length === state.toWin) {
            return true
          }
        }

            console.log("state.gameBoard[bottomRow - j][finalColumn + j]");
            console.log("turnColor")
            console.log(state.turnColor)

            console.log("bottomRow - j")
            console.log(bottomRow - j)

            console.log("finalColumn + j")
            console.log(finalColumn + j)

            console.log("toCheckArray");
            console.log(toCheckArray);

        
      }
  }
  return false
}

function checkDiagonalLeft(){

}

function checkDiagonalRight(){

}


function masterCheckWinner( callbackBL ) {
  let checkBL = callbackBL();
    console.log("checkBL")
  console.log(checkBL)
  if ( checkBL === true) {
    window.alert(turn + " has won");
  } else {
    // window.alert("Nobobdy has won yet");
  }
}

function checkSpecificDropChipCell( row, column ) {
  // let rowMinus1 = row-1;
  // let columnMinus1 = column-1;
    if ( state.gameBoard[row][column].contents === "empty"){
        return true
    } else {
        return false
    }
}

function switchUsernamesBorders() {

  if ( state.turn === state.players[0].player1Username) {
    state.turn = state.players[1].player2Username;
    state.turnColor = state.players[1].player2Color;
    state.turnColorClass = state.players[1].player2ColorClass;
    nodePlayerSections[0].style.outline="";
    nodePlayerSections[1].style.outline="4px solid " + state.players[1].player2Color;
  } else {
    state.turn = state.players[0].player1Username;
    state.turnColor = state.players[0].player1Color;
    state.turnColorClass = state.players[0].player1ColorClass;
    nodePlayerSections[1].style.outline="";
    nodePlayerSections[0].style.outline="4px solid " + state.players[0].player1Color;
  }

  // if ( state.turnColor === state.players[0].player1Color) {
  //   state.turnColor = state.players[1].player2Color
  // } else {
  //   state.turnColor = state.players[0].player1Color
  // }

  // if ( state.turnColor === state.players[0].player1Color ) {
  //   nodePlayerSections[1].style.outline="";
  //   nodePlayerSections[0].style.outline="4px solid " + state.players[0].player1Color;
  // } else {
  //   nodePlayerSections[0].style.outline="";
  //   nodePlayerSections[1].style.outline="4px solid " + state.players[1].player2Color;
  // }
  
  //    switch(state.turn === state.players[0].player1Username){
  //   case state.players[0].player1Color === "red":
  //     state.turnColorClass = "colorChipRed";
  //           colorClass = "colorChipRed";

  //     break;
  //   case state.players[0].player1Color === "blue":
  //     state.turnColorClass = "colorChipBlue";
  //           colorClass = "colorChipBlue";

  //     break;
  //   case state.players[0].player1Color === "purple":
  //     state.turnColorClass = "colorChipPurple";
  //           colorClass = "colorChipPurple";

  //     break;
  //   case state.players[0].player1Color === "green":
  //     state.turnColorClass = "colorChipGreen";
  //           colorClass = "colorChipGreen";

  //     break;
  //   default:
  //  } 

  // switch(state.turn === state.players[1].player2Username){
  //   case state.players[1].player2Color === "red":
  //     state.turnColorClass = "colorChipRed";
  //           colorClass = "colorChipRed";

  //     break;
  //   case state.players[1].player2Color === "blue":
  //     state.turnColorClass = "colorChipBlue";
  //           colorClass = "colorChipBlue";

  //     break;
  //   case state.players[1].player2Color === "purple":
  //     state.turnColorClass = "colorChipPurple";
  //           colorClass = "colorChipPurple";

  //     break;
  //   case state.players[1].player2Color === "green":
  //     state.turnColorClass = "colorChipGreen";
  //           state.turnColorClass = "colorChipGreen";

  //     break;
  //   default:

  // }

  //  switch(state.turn === state.players[0].player1Username){
  //   case state.players[0].player1Color === "red":
  //     state.turnColorClass = "colorChipRed";
  //           colorClass = "colorChipRed";

  //     break;
  //   case state.players[0].player1Color === "blue":
  //     state.turnColorClass = "colorChipBlue";
  //           colorClass = "colorChipBlue";

  //     break;
  //   case state.players[0].player1Color === "purple":
  //     state.turnColorClass = "colorChipPurple";
  //           colorClass = "colorChipPurple";

  //     break;
  //   case state.players[0].player1Color === "green":
  //     state.turnColorClass = "colorChipGreen";
  //           colorClass = "colorChipGreen";

  //     break;
  //   default:
  //  } 

  // switch(state.turn === state.players[1].player2Username){
  //   case state.players[1].player2Color === "red":
  //     state.turnColorClass = "colorChipRed";
  //           colorClass = "colorChipRed";

  //     break;
  //   case state.players[1].player2Color === "blue":
  //     state.turnColorClass = "colorChipBlue";
  //           colorClass = "colorChipBlue";

  //     break;
  //   case state.players[1].player2Color === "purple":
  //     state.turnColorClass = "colorChipPurple";
  //           colorClass = "colorChipPurple";

  //     break;
  //   case state.players[1].player2Color === "green":
  //     state.turnColorClass = "colorChipGreen";
  //           state.turnColorClass = "colorChipGreen";

  //     break;
  //   default:

  // }

}



dropNode.addEventListener("click", function(event) {
  let colorClass;
  if ( state.newGame === true ) {
  
  //  switch(state.turn === state.players[0].player1Username){
  //   case state.players[0].player1Color === "red":
  //     state.turnColorClass = "colorChipRed";
  //           colorClass = "colorChipRed";

  //     break;
  //   case state.players[0].player1Color === "blue":
  //     state.turnColorClass = "colorChipBlue";
  //           colorClass = "colorChipBlue";

  //     break;
  //   case state.players[0].player1Color === "purple":
  //     state.turnColorClass = "colorChipPurple";
  //           colorClass = "colorChipPurple";

  //     break;
  //   case state.players[0].player1Color === "green":
  //     state.turnColorClass = "colorChipGreen";
  //           colorClass = "colorChipGreen";

  //     break;
  //   default:
  //  } 

  // switch(state.turn === state.players[1].player2Username){
  //   case state.players[1].player2Color === "red":
  //     state.turnColorClass = "colorChipRed";
  //           colorClass = "colorChipRed";

  //     break;
  //   case state.players[1].player2Color === "blue":
  //     state.turnColorClass = "colorChipBlue";
  //           colorClass = "colorChipBlue";

  //     break;
  //   case state.players[1].player2Color === "purple":
  //     state.turnColorClass = "colorChipPurple";
  //           colorClass = "colorChipPurple";

  //     break;
  //   case state.players[1].player2Color === "green":
  //     state.turnColorClass = "colorChipGreen";
  //           state.turnColorClass = "colorChipGreen";

  //     break;
  //   default:

  // }

  const dropNodeClick = event.target.attributes.dropNumber.value;
  const column = Number(dropNodeClick);

  const row1 = [...row1Node.childNodes];
  const row1filtered = [];
    for ( let i = 0; i < row1.length; i++ ) {
      if ( row1[i].nodeName === "TD" ) {
        row1filtered.push(row1[i])
      }
    }

  const row2filtered = [];
  const row2 = [...row2Node.childNodes];
      for ( let i = 0; i < row2.length; i++ ) {
      if ( row2[i].nodeName === "TD" ) {
        row2filtered.push(row2[i])
      }
    }

  const row3filtered = [];
  const row3 = [...row3Node.childNodes];
      for ( let i = 0; i < row3.length; i++ ) {
      if ( row3[i].nodeName === "TD" ) {
        row3filtered.push(row3[i])
      }
    }

  const row4filtered = [];
  const row4 = [...row4Node.childNodes];
      for ( let i = 0; i < row4.length; i++ ) {
      if ( row4[i].nodeName === "TD" ) {
        row4filtered.push(row4[i])
      }
    }

  const row5filtered = [];
  const row5 = [...row5Node.childNodes];
      for ( let i = 0; i < row5.length; i++ ) {
      if ( row5[i].nodeName === "TD" ) {
        row5filtered.push(row5[i])
      }
    }

  const row6filtered = [];
  const row6 = [...row6Node.childNodes];
      for ( let i = 0; i < row6.length; i++ ) {
      if ( row6[i].nodeName === "TD" ) {
        row6filtered.push(row6[i])
      }
    }

  let row = 0;
  let arrayNodeCheck = [];
  // let recordEnd = [];
  let finalRowStoppingPoint;
  let endSwitch = false;
  let finalRowIndex;

  for ( let i=0; i < state.gameBoardRows; i++ ) {
      let toPush = checkSpecificDropChipCell(i,column);
      // console.log(i);
      // console.log(column)
      arrayNodeCheck.push(toPush);
      // if ( toPush === false && rowIndex.length === 1){
      //   finalRowStoppingPoint.push(i);
      // }
  }    
  
  // if ( finalRowStoppingPoint.length === 2) {
  //   finalRowStoppingPoint.shift()
  // }

  finalRowStoppingPoint = arrayNodeCheck.indexOf(false);
  if ( finalRowStoppingPoint === -1 ) {
    finalRowStoppingPoint = state.gameBoardRows;
  }

  finalRowIndex = finalRowStoppingPoint - 1
    console.log("finalRowIndex")

  console.log(finalRowIndex)

  if ( arrayNodeCheck[0] === true) {
    state.gameBoard[finalRowIndex][column].contents = state.turnColor;
  } else {
    window.alert("This column is full.")
  }

  checkDiagonalBottomLeft();

console.log(arrayNodeCheck)
  let checkOpen = checkSpecificDropChipCell(0,column);
  let finishingPoint = state.gameBoardRows + 4;
  let keepGoing;
  let columnsMinus1 = state.gameBoardColumns - 1;
  // let checkOpen = true;
  window.alert("state");

  console.log(state);
  // window.alert("recordEnd");
    //  console.log(recordEnd);


    //  if (recordEnd.length === 0) {
    //     rowIndex = state.gameBoardRows
    //   } else {
    //     rowIndex = recordEnd[0];
    //   }
      
      if ( arrayNodeCheck[0] === true) {
          const animationDrop = setInterval(function(){
                if ( row === 0){
                  row1filtered[column].className = state.turnColorClass;
                  row++
                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                  console.log("******************* ran 1 *****************************")
                  
                } 
                else if ( row === 1 && row < finalRowStoppingPoint) {
                  row1filtered[column].className = "";
                  row2filtered[column].className = state.turnColorClass;
                  row++;
                                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                  console.log("******************* ran 2 *****************************")
                } 
                //  else if ( row === 1 && row === rowIndex) {
                //   row1filtered[column].className = "";
                //   row2filtered[column].className = state.turnColorClass;
                //   row++;
                //                   console.log("row")
                //   console.log(row)
                //   console.log("rowIndex")
                //   console.log(rowIndex)
                //   console.log("******************* ran 2 *****************************")
                // }
                //  else if ( row === 2 && row !== rowIndex) {
                //   row2filtered[column].className = "";
                //   row3filtered[column].className = state.turnColorClass;
                //   row++;
                //                   console.log("row")
                //   console.log(row)
                //   console.log("rowIndex")
                //   console.log(rowIndex)
                //   console.log("******************* ran 3 *****************************")

                // } 
                else if ( row === 2 && row < finalRowStoppingPoint) {
                  row2filtered[column].className = "";
                  row3filtered[column].className = state.turnColorClass;
                  row++;
                                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                  console.log("******************* ran 3 *****************************")

                }
                 else if ( row === 3 && row < finalRowStoppingPoint) {
                  row3filtered[column].className = "";
                  row4filtered[column].className = state.turnColorClass;
                  row++;
                                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                          console.log("******************* ran 4 *****************************")

                } 
                else if ( row === 4 && row < finalRowStoppingPoint) {
                  row4filtered[column].className = "";
                  row5filtered[column].className = state.turnColorClass;
                  row++;
                                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                          console.log("******************* ran 5 *****************************")

                }
                //  else if ( row === 4 && row === rowIndex) {
                //   row4filtered[column].className = "";
                //   row5filtered[column].className = state.turnColorClass;
                //   row++;
                //                   console.log("row")
                //   console.log(row)
                //   console.log("rowIndex")
                //   console.log(rowIndex)
                //           console.log("******************* ran 5 *****************************")

                // }
                //  else if ( row === 5 && row !== rowIndex) {
                //   row5filtered[column].className = "";
                //   row6filtered[column].className = state.turnColorClass;
                //   row++;
                //                   console.log("row")
                //   console.log(row)
                //   console.log("rowIndex")
                //   console.log(rowIndex)
                //           console.log("******************* ran 16 *****************************")

                // }
                 else if ( row === 5 && row < finalRowStoppingPoint) {
                  row5filtered[column].className = "";
                  row6filtered[column].className = state.turnColorClass;
                  row++;
                                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                          console.log("******************* ran 16 *****************************")

                }
                else if (row === finalRowStoppingPoint) {
                    // let winningMove = masterCheckWinner( checkDiagonalBottomLeft );
                  // let winningMove = masterCheckWinner;
                  row++;
                  // endSwitch = true;
                                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                  console.log("******************* ran win *****************************")
                } else {
                  console.log("******************* ran clear *****************************")
                  switchUsernamesBorders();
                  clearInterval(animationDrop);
                                    // endSwitch = false;

                }
            
            }, 50)
      } else {
        window.alert("This column is full.")
      }
            
        }
   })

  


   
  // if ( currentRow === 1 
  //   && currentColumn !== 0
  //    ) {
  //     let rowNode = [...row1Node.childNodes];
  //     rowNode[column].className = currentColorClass;
  //  } else if (currentRow === 2){
  //      let rowNode = [...row2Node.childNodes];
  //     rowNode[column].className = currentColorClass;
  //         window.setInterval(function(){
  //           console.log(rowNode[column].className)
  //         });
   

  //  } else if (currentRow === 3){
  //     let rowNode = [...row3Node.childNodes];
  //     rowNode[column].className = currentColorClass;

  //  } else if (currentRow === 4 ){
  //     let rowNode = [...row4Node.childNodes];
  //     rowNode[column].className = currentColorClass;

  //  } else if (currentRow === 5){
  //     let rowNode = [...row5Node.childNodes];
  //     rowNode[column].className = currentColorClass;

  //  } else if (currentRow === 6){
  //     // let rowNode = [...row6Node.childNodes];
  //     // rowNode[column].className = currentColorClass;
  //   // console.log("currentColorClass")
  //       // console.log(currentColorClass)
  //       state.animationEnd = 6;
  //     window.setInterval(function() {
  //       animationSwap( 6, state.turnColorClass)
  //       if ( state.animationDropPhase === state.animationEnd) {
  //         clearInterval()
  //       } 
  //   },40);
   
  //  } else if (currentRow === 7){
  //     // let rowNode = [...row6Node.childNodes];
  //     // rowNode[column].className = currentColorClass;

  //  } else if (currentRow === 8){
  //     // let rowNode = [...row6Node.childNodes];
  //     // rowNode[column].className = currentColorClass;

  //  } else if (currentRow === 9){
  //     // let rowNode = [...row6Node.childNodes];
  //     // rowNode[column].className = currentColorClass;

  //  } else {
  //   window.alert("This column is full.")
  //  }
  // let checkColumn = typeof column
  // console.log("dropNodeClick")


// let checkSpecificDropChipColumnCheck = checkSpecificDropChipColumn(1,2);
// console.log(checkSpecificDropChipColumnCheck)
// console.log(test)
// console.log(state.gameBoard.length)




// clearStylingsP1()
