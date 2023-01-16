document.getElementById("add-player").addEventListener("click", function () {
  const playerName = document.getElementById("player");
  const playerNameValue = playerName.value;
  if (playerNameValue == "") {
    return;
  }
  const li = document.createElement("li");
  const players = document.getElementById("players");
  li.innerText = playerNameValue;
  players.appendChild(li);
  playerName.value = "";
});
