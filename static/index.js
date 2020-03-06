window.onload = () => {
  const item1 = document.createElement("li");
  const item2 = document.createElement("li");
  const item3 = document.createElement("li");

  item1.innerText = "take garbage out";
  item2.innerText = "Play video game";
  item3.innerText = "Take over the world";

  const listItems = document.createElement("ul");
  listItems.append(item1, item2, item3);
  const vanillaList = document.getElementById("list").appendChild(listItems);
};
