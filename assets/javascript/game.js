$(document).ready(function() {
  var userToGet = Math.floor(Math.random() * 101 + 19);
  $("#randomNumber").text(userToGet);

  var blueGem = Math.floor(Math.random() * 11 + 1);
  var greenGem = Math.floor(Math.random() * 11 + 1);
  var yellowGem = Math.floor(Math.random() * 11 + 1);
  var redGem = Math.floor(Math.random() * 11 + 1);

  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);

  function reset() {
    userToGet = Math.floor(Math.random() * 101 + 19);
    console.log(userToGet);
    $("#randomNumber").text(userToGet);
    blueGem = Math.floor(Math.random() * 11 + 1);
    greenGem = Math.floor(Math.random() * 11 + 1);
    yellowGem = Math.floor(Math.random() * 11 + 1);
    redGem = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
  }

  function winner() {
    wins++;
    $("#numberWins").text(wins);
    reset();
  }

  function loser() {
    losses++;
    $("#numberLosses").text(losses);
    reset();
  }

  $("#blueGem").on("click", function() {
    userTotal = userTotal + blueGem;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == userToGet) {
      winner();
    } else if (userTotal > userToGet) {
      loser();
    }
  });
  $("#greenGem").on("click", function() {
    userTotal = userTotal + greenGem;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == userToGet) {
      winner();
    } else if (userTotal > userToGet) {
      loser();
    }
  });
  $("#yellowGem").on("click", function() {
    userTotal = userTotal + yellowGem;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == userToGet) {
      winner();
    } else if (userTotal > userToGet) {
      loser();
    }
  });
  $("#redGem").on("click", function() {
    userTotal = userTotal + redGem;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == userToGet) {
      winner();
    } else if (userTotal > userToGet) {
      loser();
    }
  });
});
