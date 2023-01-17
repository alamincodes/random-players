function randomDuo(items, groupSize) {
  function getRandomElement() {
    const index = Math.floor(Math.random() * items.length);
    const element = items[index];
    items.splice(index, 1);
    return element;
  }

  const group = [];

  for (let i = 0; i < groupSize; i++) {
    const randomElm = getRandomElement();
    group.push(randomElm);
  }

  return group;
}
const people = [];
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
  people.push(playerNameValue);
  playerName.value = "";

  console.log(people);
});
document.getElementById("shuffle").addEventListener("click", function () {
  const playerSize = Number(document.getElementById("group").value);
  console.log(playerSize);
  let group = [];
  group = randomDuo(people, playerSize);
  const group1 = document.getElementById("group-1");
  for (let i = 0; i < group.length; i++) {
    const li = document.createElement("li");
    li.innerText = group[i];
    group1.appendChild(li);
  }
  group = randomDuo(people, playerSize);
  const group2 = document.getElementById("group-2");
  for (let i = 0; i < group.length; i++) {
    const li = document.createElement("li");
    li.innerText = group[i];
    group2.appendChild(li);
  }
});
