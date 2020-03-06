window.onload = () => {
  alert("Hello world!");
};

const item1 = (document.createElement("li").innerText = "take garbage out");
const item2 = (document.createElement("li").innerText = "Play video game");
const item3 = (document.createElement("li").innerText = "Take over the world");

const listItems = document.createElement("ul");
listItems.append(item1,item2,item3);
const vanillaList = document.getElementById("list").appendChild(listItems);
