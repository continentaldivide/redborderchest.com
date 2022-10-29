const data = [
  {
    symbol: "./assets/rune-1.png",
    description:
      "After the first chest, turn and look at the wall once you've jumped onto the swinging pendulum.",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-2.png",
    description:
      "At the first secret chest, look above the doorway (on the side the chest is on).",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-3.png",
    description:
      "In the left room of the Totems encounter on the balcony where adds spawn.",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-4.png",
    description:
      "In the Warpriest's room, on the wall after climbing the right-side stairs.",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-5.png",
    description:
      "Before entering Golgoroth's arena, on the wall of the final pit in the ground.",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-6.png",
    description:
      "In Golgoroth's arena, behind and to the left of the first DPS puddle (under the ledge).",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-7.png",
    description:
      "On the wall next to the secret chest in the final jumping puzzle.",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-8.png",
    description:
      "On the ceiling directly before exiting the door to leave the final jumping puzzle.",
    state: "symbol",
  },
  {
    symbol: "./assets/rune-9.png",
    description: "Above the doorway on the inside of the Daughters/Oryx arena.",
    state: "symbol",
  },
];

data.forEach((item) => {
  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  newDiv.setAttribute("class", "symbol");
  newImg.setAttribute("src", item.symbol);
  document.querySelector(".grid").appendChild(newDiv);
  newDiv.appendChild(newImg);
  newDiv.addEventListener("click", function (e) {
    if (item.state == "symbol") {
      newDiv.firstChild.remove();
      const newP = document.createElement("p");
      newP.textContent = `${item.description}`;
      newDiv.appendChild(newP);
      newDiv.setAttribute("class", "description");
      item.state = "description";
    } else if (item.state == "description") {
      newDiv.firstChild.remove();
      const newImg = document.createElement("img");
      newImg.setAttribute("src", item.symbol);
      newDiv.appendChild(newImg);
      newDiv.setAttribute("class", "symbol");
      item.state = "symbol";
    }
  });
});
