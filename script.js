const data = [
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
  { symbol: "./assets/rune-1.png", description: "bar", state: "symbol" },
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
