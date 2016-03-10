var game;

var Player = function(i) {
  this.position = 0;
}

var ChutesAndLadders = function(options) {
  game = this;
  this.players = {};
  this.currentPlayer = 1;
  for (var i = 1; i <= 4; i++){
    this.players[i] = new Player(i);
  }
}

var ladderPositions = {
    1: 38,
    4: 14,
    9: 31,
    28: 84,
    21: 42,
    36: 44,
    51: 67,
    71: 91,
    80: 100
}

var sliderPositions = {
    98: 78,
    95: 75,
    93: 73,
    87: 24,
    64: 60,
    62: 19,
    56: 53,
    47: 26,
    49: 11,
    16: 6
}

var isLadderPosition = function(position){
  return (ladderPositions[position] !== undefined)
}

var isSliderPosition = function(position){
  return (sliderPositions[position] !== undefined)
}

ChutesAndLadders.prototype.turn = function () {
    var newPosition = currentSlice + 1 + this.players[this.currentPlayer].position;
    if (newPosition > 100) {
      newPosition = this.players[this.currentPlayer].position;
    }
    this.toggleDisplay(newPosition);

    if (isLadderPosition(this.players[this.currentPlayer].position)){
      alert('Yay!');
      newPosition = ladderPositions[this.players[this.currentPlayer].position]
    } else if (isSliderPosition(this.players[this.currentPlayer].position)){
      alert('Oh No!');
      newPosition = sliderPositions[this.players[this.currentPlayer].position]
    }

    this.toggleDisplay(newPosition);

    if (this.players[this.currentPlayer].win()) {
        alert("Player" + this.currentPlayer + ' has won!');
    } else {
        this.currentPlayer = ((this.currentPlayer + 1) < Object.keys(this.players).length + 1) ? (this.currentPlayer + 1) : 1;
        document.getElementById("spinner-button").innerHTML = "Player " + this.currentPlayer + "'s turn"
    }
};

ChutesAndLadders.prototype.toggleDisplay = function(newPosition) {
  var oldPosition = this.players[this.currentPlayer].position;
  var oldPositionDoc = document.getElementById("board" + oldPosition + "-player" + this.currentPlayer);
  oldPositionDoc.className = "player-piece player" + this.currentPlayer + "-piece hidden";
  this.players[this.currentPlayer].position = newPosition;
  var newPositionDoc = document.getElementById("board" + newPosition + "-player" + this.currentPlayer);
  newPositionDoc.className = "player-piece player" + this.currentPlayer + "-piece";
}

Player.prototype.win = function () {
    return this.position === 100;
    spinButton.setAttribute("disabled", "true");
};
