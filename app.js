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
}

function changeDisplayUsername( node, username, usernameOriginal) {
  if(username !== usernameOriginal) {
    node.innerHTML = username;
  }
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
  } else if ( color === "blue") {
    child2.style.outline = "";
  } else if ( color === "green" ) {
    child3.style.outline = "";
  } else if ( color === "purple" ) {
    child4.style.outline = "";
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
  } else if ( color === "blue") {
    child2.style.outline = "";
  } else if ( color === "green" ) {
    child3.style.outline = "";
  } else if ( color === "purple" ) {
    child4.style.outline = "";
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
    event.target.style.outline = "3px solid black";
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
    event.target.style.marginRight = "1vw";
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

  switch ( state.newGame === false) {
  case event.target.className === "colorCircleBlue":
    clearStylingsP1(state.players[0].player1Color);
    colorsPlayer1Heading.style.color = "blue" 
    state.players[0].player1Color = "blue";
    state.players[0].player1ColorClass = "colorChipBlue";
    console.dir(event.target.style.outline)
    event.target.style.outline = "3px solid black";
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
    event.target.style.marginRight = "1vw";
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
    colorsPlayer2Heading.style.color = "blue";
    state.players[1].player2Color = "blue";
    state.players[1].player2ColorClass = "colorChipBlue";
    console.dir(event.target.style.outline);
    event.target.style.outline = "3px solid black";
  break;
  case event.target.className === "colorCirclePurple":
    clearStylingsP2(state.players[1].player2Color);
    colorsPlayer2Heading.style.color = "purple" 
    state.players[1].player2Color = "purple"
    state.players[1].player2ColorClass = "colorChipPurple";
    event.target.style.outline = "3px solid black"
  break; 
    case event.target.className === "colorCircleGreen":
    clearStylingsP2(state.players[1].player2Color);
    colorsPlayer2Heading.style.color = "green" 
    state.players[1].player2Color = "green"
    state.players[1].player2ColorClass = "colorChipGreen";
    event.target.style.outline = "3px solid black"
  break; 
    case event.target.className === "colorCircleRed":
    clearStylingsP2(state.players[1].player2Color);
    colorsPlayer2Heading.style.color = "rgb(234, 10, 10)" 
    state.players[1].player2Color = "red";
    state.players[1].player2ColorClass = "colorChipRed";
    event.target.style.outline = "3px solid black"
  break; 
  default:

 }

})

const nodeStartGame = document.getElementsByClassName("startGame")[0];
const nodePlayerSections = document.getElementsByClassName("playerSections");

function gameTransition( playerHeadlineNode, color, playerColorsNode ) {

state.newGame = true;

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
    toAttachShield2.className = "specialPiecesShieldRed2";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkullRedD"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkullRedLR"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else if ( color === "blue") {
    toAttach.className = "colorCircleBlueSmall";
    playerHeadlineNode.appendChild(toAttach);
    toAttachShield2.className = "specialPiecesShieldBlue2";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkullBlueD"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkullBlueLR"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else if ( color === "green" ) {
    toAttach.className = "colorCircleGreenSmall";
    playerHeadlineNode.appendChild(toAttach);
    toAttachShield2.className = "specialPiecesShieldGreen2";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkullGreenD"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkullGreenLR"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else if ( color === "purple" ) {
    toAttach.className = "colorCirclePurpleSmall";
    playerHeadlineNode.appendChild(toAttach);
   toAttachShield2.className = "specialPiecesShieldPurple2";
    toAttachShield2.attribute = "shield"
    playerColorsNode.appendChild(toAttachShield2);
    toAttachDeathDiagonal.className = "specialPiecesSkullPurpleD"; 
    toAttachDeathStraight.attribute = "deathDiagonal"
    playerColorsNode.appendChild(toAttachDeathDiagonal);
    toAttachDeathStraight.className = "specialPiecesSkullPurpleLR"; 
    toAttachDeathStraight.attribute = "deathStraight"
    playerColorsNode.appendChild(toAttachDeathStraight);
  } else {

  }

}



nodeStartGame.addEventListener("click", function() {

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
        nodePlayerSections[0].style.height = "21vw";
        nodePlayerSections[1].style.height = "21vw";
      } else {
        state.turn = state.players[1].player2Username;
        state.turnColor = state.players[1].player2Color;
        nodePlayerSections[1].style.outline="4px solid " + state.players[1].player2Color;
        nodePlayerSections[1].style.height = "21vw";
        nodePlayerSections[0].style.height = "21vw";
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
    window.alert("Both users must choose a color and they can't be the same.")
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
    } 
 
})

nodeUsernameBoxP2.addEventListener("click", function() {
    if ( nodeInputDataP2.value.length < 10 && state.newGame === false ) {
      state.players[1].player2Username = nodeInputDataP2.value;
      console.log(state.players[1].player2Username);
      changePlayerHeadline( colorsPlayer2Heading , state.players[1].player2Username);
    };
});


function masterCheckWinner( ) {
  for ( i = 0; i < state.gameBoardRows; i++) {

        for ( j = 0; j < state.gameBoardColumns; j++) {

          let colMin1 = state.gameBoardColumns - 1;
          let rowMin1 = state.gameBoardRows - 1;
      
            if ( i - state.toWin >= 0) {

                let top1 = state.gameBoard[i][j].contents;
                let top2 = state.gameBoard[i - 1][j].contents;
                let top3 = state.gameBoard[i - 2][j].contents;
                let top4 = state.gameBoard[i - 3][j].contents;
       
                    if ( top1 === state.turnColor && top2 === state.turnColor && top3 === state.turnColor && top4 === state.turnColor ) {
                      return true
                    }

            } else {

            }


            if ( i - state.toWin >= 0 && j - state.toWin >= 0) {

                let topDiagonalLeft1 = state.gameBoard[i][j].contents;
                let topDiagonalLeft2 = state.gameBoard[i - 1][j - 1].contents;
                let topDiagonalLeft3 = state.gameBoard[i - 2][j - 2].contents;
                let topDiagonalLeft4 = state.gameBoard[i - 3][j - 3].contents;

                  if ( topDiagonalLeft1 === state.turnColor && topDiagonalLeft2 === state.turnColor && topDiagonalLeft3 === state.turnColor && topDiagonalLeft4 === state.turnColor) {
                    return true
                  }

            } else {
           
            }
            
            if ( i - state.toWin >= 0 && j + 4 <= colMin1 ) {

                let topDiagonalRight1 = state.gameBoard[i][j].contents;
                let topDiagonalRight2 = state.gameBoard[i - 1][j + 1].contents;
                let topDiagonalRight3 = state.gameBoard[i - 2][j + 2].contents;
                let topDiagonalRight4 = state.gameBoard[i - 3][j + 3].contents;

                  if ( topDiagonalRight1 === state.turnColor && topDiagonalRight2 === state.turnColor && topDiagonalRight3 === state.turnColor && topDiagonalRight4 === state.turnColor) {
                    return true
                  }

            } else {

            }


            if ( i + 4 <= rowMin1 ) {

                let bottom1 = state.gameBoard[i][j].contents;
                let bottom2 = state.gameBoard[i + 1][j].contents;
                let bottom3 = state.gameBoard[i + 2][j].contents;
                let bottom4 = state.gameBoard[i + 3][j].contents;

                  if ( bottom1 === state.turnColor && bottom2 === state.turnColor && bottom3 === state.turnColor && bottom4 === state.turnColor ) {
                    return true
                  }

            } else {

            }

        
            if ( j - state.toWin >= 0) {

                let left1 = state.gameBoard[i][j].contents;
                let left2 = state.gameBoard[i][j - 1].contents;
                let left3 = state.gameBoard[i][j - 2].contents;
                let left4 = state.gameBoard[i][j - 3].contents;

                    if ( left1 === state.turnColor && left2 === state.turnColor && left3 === state.turnColor && left4 === state.turnColor ) {
                      return true
                    }

            } else {

            }

   
            if ( j + 4 <= colMin1 ) {

                let right1 = state.gameBoard[i][j].contents;
                let right2 = state.gameBoard[i][j + 1].contents;
                let right3 = state.gameBoard[i][j + 2].contents;
                let right4 = state.gameBoard[i][j + 3].contents;

                    if ( right1 === state.turnColor && right2 === state.turnColor && right3 === state.turnColor && right4 === state.turnColor) {
                      return true
                    }

            } else {

            }
    

            if ( i + 4 <= rowMin1 && j - state.toWin >= 0 ) {

              let bottomDiagonalLeft1 = state.gameBoard[i][j].contents;
              let bottomDiagonalLeft2 = state.gameBoard[i + 1][j - 1].contents;
              let bottomDiagonalLeft3 = state.gameBoard[i + 2][j - 2].contents;
              let bottomDiagonalLeft4 = state.gameBoard[i + 3][j - 3].contents;

                  if ( bottomDiagonalLeft1 === state.turnColor && bottomDiagonalLeft2 === state.turnColor && bottomDiagonalLeft3 === state.turnColor && bottomDiagonalLeft4 === state.turnColor ) {
                    return true
                  }

            } else {

            }
          

            if ( i + 4 <= rowMin1 && j + 4 <= colMin1  ) {

              let bottomDiagonalRight1 = state.gameBoard[i][j].contents;
              let bottomDiagonalRight2 = state.gameBoard[i + 1][j + 1].contents;
              let bottomDiagonalRight3 = state.gameBoard[i + 2][j + 2].contents;
              let bottomDiagonalRight4 = state.gameBoard[i + 3][j + 3].contents;

                if ( bottomDiagonalRight1 === state.turnColor && bottomDiagonalRight2 === state.turnColor && bottomDiagonalRight3 === state.turnColor && bottomDiagonalRight4 === state.turnColor ) {
                    return true
                  }

            } else {

            }

        }
  }

  return false

}

function checkSpecificDropChipCell( row, column ) {
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

}


dropNode.addEventListener("click", function(event) {

  if ( state.newGame === true ) {

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
  let finalRowStoppingPoint;
  let finalRowIndex;

  for ( let i=0; i < state.gameBoardRows; i++ ) {
      let toPush = checkSpecificDropChipCell(i,column);
      arrayNodeCheck.push(toPush);
  }    
  
  finalRowStoppingPoint = arrayNodeCheck.indexOf(false);

  if ( finalRowStoppingPoint === -1 ) {
    finalRowStoppingPoint = state.gameBoardRows;
  }

  finalRowIndex = finalRowStoppingPoint - 1;

  if ( arrayNodeCheck[0] === true) {
    state.gameBoard[finalRowIndex][column].contents = state.turnColor;
  } else {
    window.alert("This column is full.")
  }

  let checkMaster = masterCheckWinner();
      
      if ( arrayNodeCheck[0] === true) {
          const animationDrop = setInterval(function(){

                if ( row === 0){
                  row1filtered[column].className = state.turnColorClass;
                  row++
                  
                } 
                else if ( row === 1 && row < finalRowStoppingPoint) {
                  row1filtered[column].className = "";
                  row2filtered[column].className = state.turnColorClass;
                  row++;
               
                } 
                else if ( row === 2 && row < finalRowStoppingPoint) {
                  row2filtered[column].className = "";
                  row3filtered[column].className = state.turnColorClass;
                  row++;
                                  console.log("row")
                  console.log(row)
                  // console.log("rowIndex")
                  // console.log(rowIndex)
                  console.log("******************* ran 3 *****************************")

                } else if ( row === 3 && row < finalRowStoppingPoint) {
                  row3filtered[column].className = "";
                  row4filtered[column].className = state.turnColorClass;
                  row++;
                } else if ( row === 4 && row < finalRowStoppingPoint) {
                  row4filtered[column].className = "";
                  row5filtered[column].className = state.turnColorClass;
                  row++;
                } else if ( row === 5 && row < finalRowStoppingPoint) {
                  row5filtered[column].className = "";
                  row6filtered[column].className = state.turnColorClass;
                  row++;
                } else if (row === finalRowStoppingPoint) {

                    if ( checkMaster) {
                      window.alert( state.turn + " has won the game!")
                    }

                    row++;
               
                } else {
            
                  switchUsernamesBorders();
                  clearInterval(animationDrop);

                }
            
            }, 50)
      } else {
        window.alert("This column is full.")
      }
            
        }
   })

