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
  const todoItem = items => {
    const checkedItems = items.checked.document.createElement("input");
    checkedItems.checked.setAttribute("type", "checkbox");
    document.createElement("span");
    const newItem = items.document.createElement("li");
    return document(newItem);
  };

  

  const todoList = items => {
    todoList = document.createElement('ul');
    todoList.appendChild(items.map(todoItem))
    
  };

  document.getElementById("list").appendChild(todoList(items));
  document(todoItem(items))
};
