var gameBoard = document.getElementById("gameBoardPieces");

function isEven(n) {
   return n % 2 == 0;
}

function addChild(id){
  gameBoard.appendChild(document.createElement("div")).setAttribute("id", "boardPiece" + id);
  document.getElementById("boardPiece" + id).style.backgroundImage = 'url(images/chutes-ladders' + id + '.jpeg)';
  document.getElementById("boardPiece" + id).className = "game-board-piece";
  var boardPiece = document.getElementById("boardPiece" + id);
  boardPiece.appendChild(document.createElement("div")).setAttribute("id", "board" + id + "-player1");
  var playerShow = document.getElementById("board" + id + "-player1");
  playerShow.className = "player-piece player1-piece hidden";
  boardPiece.appendChild(document.createElement("div")).setAttribute("id", "board" + id + "-player2");
  playerShow = document.getElementById("board" + id + "-player2");
  playerShow.className = "player-piece player2-piece hidden";
  boardPiece.appendChild(document.createElement("div")).setAttribute("id", "board" + id + "-player3");
  playerShow = document.getElementById("board" + id + "-player3");
  playerShow.className = "player-piece player3-piece hidden";
  boardPiece.appendChild(document.createElement("div")).setAttribute("id", "board" + id + "-player4");
  playerShow = document.getElementById("board" + id + "-player4");
  playerShow.className = "player-piece player4-piece hidden";
}

var boardAry = [];

for (var j = 10; j >= 1; j--){
  var x = j * 10;
  var intermediateAry = [];
  for (var i = x; i >= x - 9; i--){
    intermediateAry.push(i);
  }
  if (isEven(j)){
    boardAry = boardAry.concat(intermediateAry);
  } else {
    boardAry = boardAry.concat(intermediateAry.reverse());
  }
}

boardAry.forEach( function(el) {
  addChild(el);
})
