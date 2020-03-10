window.onload = () => {
  // const item1 = document.createElement("li");
  // const item2 = document.createElement("li");
  // const item3 = document.createElement("li");

  // item1.innerText = "take garbage out";
  // item2.innerText = "Play video game";
  // item3.innerText = "Take over the world";

  // listItems.append(item1, item2, item3);
  // const vanillaList = document.getElementById("list").appendChild(listItems);

  const items = [
    { title: "take garbage out", checked: true },
    { title: "Play video games", checked: false },
    { title: "Take over the world", checked: true }
  ];

  const todoList = (todoItem) => {
    const todoListItems = document.createElement("ul").appendChild(todoItem);
      document.getElementById("list").appendChild(todoListItems);
  }

  const todoItem = ({[items]}) => {
    const itemsMapped = items.title.map.document.createElement("li");
    const itemsMappedChecked = itemsMapped.checked.document.createElement(
      "INPUT"
    );
    itemsMappedChecked.setAttribute("type", "checkbox");
  };

  document.todoList(todoItem)
  
};
