// const gridItems = document.querySelectorAll(".grid-item");

const data = [
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
  { symbol: "foo", description: "bar", state: "symbol" },
];

const gridItems = data.map((item) => {
  const newDiv = document.createElement("div");
  const newP = document.createElement("p");
  newDiv.setAttribute("class", "grid-item");
  newP.textContent = item.symbol;
  document.querySelector(".grid").appendChild(newDiv);
  newDiv.appendChild(newP);
  return newDiv;
});

gridItems.forEach((item, i) => {
  item.addEventListener("click", function (e) {
    if (data[i].state == "symbol") {
      item.style.background = "blue";
      item.firstChild.textContent = `${data[i].description}`;
      data[i].state = "description";
    } else if (data[i].state == "description") {
      item.style.background = "rgba(16, 51, 11, 0.6)";
      item.firstChild.textContent = `${data[i].symbol}`;
      data[i].state = "symbol";
    }
  });
});
