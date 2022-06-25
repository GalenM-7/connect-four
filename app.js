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
  gameBoardColumns: 7,
  gameBoardRows: 6,
  toWin: 4,
  animationDropPhase: 1,
  animationEnd: 7,
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
       
      let randomNumber = Math.floor(Math.random() * 10);

      if ( randomNumber % 2 === 0) {
        state.turn === state.players[0].player1Username;
        state.turnColor === state.players[0].player1Color;
        nodePlayerSections[0].style.outline="4px solid " + state.players[0].player1Color;
      } else {
        state.turn === state.players[1].player2Username;
        state.turnColor === state.players[1].player2Color;
        nodePlayerSections[1].style.outline="4px solid " + state.players[1].player2Color;
      }

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

function checkDiagonalBottomLeft(color){
  for ( let i = gameBoardColumns - state.toWin ; i < 0; i--) {
    let toCheckArray = [];
      for ( let j = 0; j < state.toWin; i++) {
        const bottomRow = gameBoardColumns-1
        // let checkIndividualElement;
          if ( state.gameBoard[bottomRow][i + j] === color){
            toCheckArray.push("success");
          } else {
            toCheckArray = [];
          }
          if ( toCheckArray.length === state.toWin) {
            return true
          }
      }
  }
  return false
}

function checkDiagonalLeft(){

}

function checkDiagonalRight(){

}


function checkSpecificDropChipColumn( row, column ) {
  // let rowMinus1 = row-1;
  // let columnMinus1 = column-1;
    if ( state.gameBoard[row][column].contents === "empty"){
        return true
    } else {
        return false
    }
}

function animationSwap(
  // animationNodeRemove, animationNodeAdd, 
  columnSet, classToAdd ) {
    console.log("animationRannnnnnnnnnnnnnnnnnnnn")
  // animationNodeRemove.className = "";
  // animationNodeAdd.className = classToAdd
  let rowNode1 = [...row1Node.childNodes];
  let rowNode2 = [...row2Node.childNodes];
  let rowNode3 = [...row3Node.childNodes];
  let rowNode4 = [...row4Node.childNodes];
  let rowNode5 = [...row5Node.childNodes];
  let rowNode6 = [...row6Node.childNodes];
  // let rowNode7 = [...row7Node.childNodes];
  // let rowNode8 = [...row1Node.childNodes];
  // let rowNode9 = [...row1Node.childNodes];
  if ( state.animationDropPhase === 1 && state.animationDropPhase <= state.animationEnd ) {
    // rowNode1[column].className = "";
    rowNode1[columnSet].className = classToAdd;
    // state.animationDropPhase = 2
    state.animationDropPhase++
  } else if ( state.animationDropPhase === 2 && state.animationDropPhase <= state.animationEnd ) {
    rowNode1[columnSet].className = "";
    rowNode2[columnSet].className = classToAdd;
    state.animationDropPhase++
  }  else if ( state.animationDropPhase === 3 && state.animationDropPhase <= state.animationEnd ) {
    rowNode2[columnSet].className = "";
    rowNode3[columnSet].className = classToAdd;
    state.animationDropPhase++
  } else if ( state.animationDropPhase === 4 && state.animationDropPhase <= state.animationEnd ) {
    rowNode3[columnSet].className = "";
    rowNode4[columnSet].className = classToAdd;
    state.animationDropPhase++
  } else if ( state.animationDropPhase === 5 && state.animationDropPhase <= state.animationEnd ) {
    rowNode4[columnSet].className = "";
    rowNode5[columnSet].className = classToAdd;
    state.animationDropPhase++
  } else if ( state.animationDropPhase === 6 && state.animationDropPhase <= state.animationEnd ) {
    rowNode5[columnSet].className = "";
    rowNode6[columnSet].className = classToAdd;
    state.animationDropPhase++
  } else {

  }
}

function animationDrop(test) {
  // if ( state.animationDropPhase <= state.animationEnd && state.animationDropPhase === 1) {

  // }
  window.alert(test)
}

dropNode.addEventListener("click", function(event) {

  let currentColorClass;
  
   switch(state.turn === state.players[0].player1Username){
    case state.players[0].player1Color === "red":
      state.turnColorClass = "colorChipRed"
      break;
    case state.players[0].player1Color === "blue":
      state.turnColorClass = "colorChipBlue"
      break;
    case state.players[0].player1Color === "purple":
      state.turnColorClass = "colorChipPurple"
      break;
    case state.players[0].player1Color === "green":
      state.turnColorClass = "colorChipGreen"
      break;
    default:
   } 

  switch(state.turn === state.players[1].player2Username){
    case state.players[1].player2Color === "red":
      state.turnColorClass = "colorChipRed"
      break;
    case state.players[1].player2Color === "blue":
      state.turnColorClass = "colorChipBlue"
      break;
    case state.players[1].player2Color === "purple":
      state.turnColorClass = "colorChipPurple"
      break;
    case state.players[1].player2Color === "green":
      state.turnColorClass = "colorChipGreen"
      break;
    default:

  }

  const dropNodeClick = event.target.attributes.dropNumber.value;
  const column = Number(dropNodeClick);
  const row1 = [...row1Node.childNodes];
  const row2 = [...row2Node.childNodes];
  const row3 = [...row3Node.childNodes];
  const row4 = [...row4Node.childNodes];
  const row5 = [...row5Node.childNodes];
  const row6 = [...row6Node.childNodes];
  // state.animationEnd = column;
  state.animationDropPhase = 1;

  const animationDrop = setInterval(function(){
    console.log(row1)
    state.animationDropPhase += 1;
    console.log(state.animationDropPhase)
    console.log(state.animationEnd)

    if ( state.animationDropPhase > state.animationEnd){
      console.log("END THIS ANIMAIONNNN")
    clearInterval(animationDrop)
    }},1100)


  // console.log("dropNodeClick");
  // console.dir(dropNodeClick)
 

  // const columnMinusOne = column - 1;
  // let arrayNodeColumnAttributes = [ 1, 3, 5, 7, 9, 11, 13]
  // let currentColumnIndex = arrayNodeColumnAttributes.indexOf(column);
  // let currentRow = 0;
  //  for ( let i = 0; i < state.gameBoardRows; i++){
  //   let checkOpen = checkSpecificDropChipColumn(i,currentColumnIndex);
  //   console.log("i + currentColumnIndex")
  //   console.log(i + " " + column)
  //   console.log("forloopRan");
  //     if (checkOpen === true) {
  //       currentRow++
          // switch(checkOpen === true) {
          //   case i === 0:
          //     row1[column].className = state.turnColorClass;
          //     console.log("row1[column]");
          //     console.log(row1[column])
          //   break;
          //   case i === 1:
          //     window.setTimeout(function(){
          //       row1[column].className = "";
          //       row2[column].className = state.turnColorClass;
          //     },300)
          //     // row1[column].className = "";
          //     // row2[column].className = state.turnColorClass;
          //     // console.log("row2[column]");
          //     // console.log(row2[column])
          //   break;
          //   case i===2:
          //      window.setTimeout(function(){
          //       row2[column].className = "";
          //       row3[column].className = state.turnColorClass;
          //     },300)
          //     // row2[column].className = "state.turnColorClass";
          //     // row3[column].className = state.turnColorClass;
          //     // console.log("row3[column]");
          //     // console.log(row3[column])
          //   break;
          //   case i===3:
          //       window.setTimeout(function(){
          //       row3[column].className = "";
          //       row4[column].className = state.turnColorClass;
          //     },300)
          //   break;
          //   case i===4:
          //       window.setTimeout(function(){
          //       row4[column].className = "";
          //       row5[column].className = state.turnColorClass;
          //     },300)
          //   break;
          //   case i===5:
          //       window.setTimeout(function(){
          //       row5[column].className = "";
          //       row6[column].className = state.turnColorClass;
          //     },300)
          //   break;
          //   default:
    
          // }
      // } 
      // else if (checkOpen === true && i === 0){
      //   currentRow++
      //   currentColumn += 1
      // }
      //  else {
      //   break
      // }
      
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
