const gridItems = document.querySelectorAll(".grid-item");

let states = [];

gridItems.forEach((item, i) => {
  states.push("symbol");
  item.addEventListener("click", function (e) {
    if (states[i] == "symbol") {
      e.target.style.background = "blue";
      // not working quite as desired -- if hover target
      // is <p>, this only turns the background of the p
      // element blue rather than the whole div
      let content = document.createElement("p");
      content.textContent = `"${descriptions[i]}"`;
      content.setAttribute("id", "box " + i + " text");
      gridItems[i].appendChild(content);
      states[i] = "description";
    } else if (states[i] == "description") {
      e.target.style.background = "rgba(16, 51, 11, 0.6)";
      content = document.getElementById("box " + i + " text");
      gridItems[i].removeChild(content);
      states[i] = "symbol";
    }
  });
});

const descriptions = ["test text 1", "test text 2"];
