resetGame = function() {
  new ChutesAndLadders;
  document.getElementsByClassName("player1-piece").className = "player-piece player1-piece hidden";
  document.getElementsByClassName("player2-piece").className = "player-piece player2-piece hidden";
  document.getElementsByClassName("player3-piece").className = "player-piece player3-piece hidden";
  document.getElementsByClassName("player4-piece").className = "player-piece player4-piece hidden";
  document.getElementById("board0-player1").className = "player player-piece player1-piece";
  document.getElementById("board0-player2").className = "player player-piece player2-piece";
  document.getElementById("board0-player3").className = "player player-piece player3-piece";
  document.getElementById("board0-player4").className = "player player-piece player4-piece";
  document.getElementById("spinner-button").innerHTML = "Player 1's turn"
}
