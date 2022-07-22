let squares = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  list = document.getElementById("list");

squares.forEach((item) => {
  list.innerHTML += "<li list-item=" + item + ">" + item + "</li>";
});

shuffleHandler = () => {
  let i = 0;
  squares = squares.sort(() => {
    return 0.5 - Math.random();
  });

  list.innerHTML = "";

  for (let i = 0; i < squares.length; ++i) {
    let listItem = document.createElement("li");
    listItem.innerHTML = squares[i];
    listItem.setAttribute("list-item", squares[i]);
    list.appendChild(listItem);
  }
};
sortHandler = () => {
  let i = 0;
  squares = squares.sort((x, y) => {
    return x - y;
  });
  list.innerHTML = "";
  for (let i = 0; i < squares.length; ++i) {
    let listItem = document.createElement("li");
    listItem.innerHTML = squares[i];
    listItem.setAttribute("list-item", squares[i]);
    list.appendChild(listItem);
  }
};
