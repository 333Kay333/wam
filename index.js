
let currentMoleTile;
let currentPlantTile;
let score = 0;


window.onload = function() {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000);
setInterval(setPlant, 2000);

  }
function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
  function setMole() {

    if (currentMoleTile) {
      currentMoleTile.innerHTML = "";
    }

let mole = document.createElement("img");
mole.src = "./monty-mole.png";

let num = getRandomTile();
if (currentPlantTile && currentPlantTile.id === num) {
  return;
}

currentMoleTile = document.getElementById(num);
currentMoleTile.appendChild(mole);

  }

  function setPlant() {

    if (currentPlantTile) {
      currentPlantTile.innerHTML = "";
    }

let plant = document.createElement("img");
plant.src = "./piranha-plant.png";

let num = getRandomTile();
if (currentMoleTile && currentMoleTile.id === num) {
  return;
}
currentPlantTile = document.getElementById(num);
currentPlantTile.appendChild(plant);

  }