var gameBoard = document.getElementById("gameBoardPieces");

function isEven(n) {
   return n % 2 == 0;
}

function addChild(id){
  gameBoard.appendChild(document.createElement("div")).setAttribute("id", id);
  document.getElementById(id).style.backgroundImage = 'url(images/chutes-ladders' + id + '.jpeg)';
  document.getElementById(id).className = "game-board-piece";
}

var ary = [];

for (var j = 10; j >= 1; j--){
  var x = j * 10;
  var intermediateAry = [];
  for (var i = x; i >= x - 9; i--){
    intermediateAry.push(i);
  }
  if (isEven(j)){
    ary = ary.concat(intermediateAry);
  } else {
    ary = ary.concat(intermediateAry.reverse());
  }
}

ary.forEach( function(el) {
  addChild(el);
})
