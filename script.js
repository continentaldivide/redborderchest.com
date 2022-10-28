const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item, i) => {
  item.addEventListener("click", function (e) {
    e.target.style.background = "blue";
    // not working quite as desired -- if hover target
    // is <p>, this only turns the background of the p
    // element blue rather than the whole div
    let content = document.createElement("p");
    content.textContent = `"${descriptions[i]}"`;
    gridItems[i].appendChild(content);
  });
});

const descriptions = ["test text 1", "test text 2"];
