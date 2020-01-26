const get = element => document.getElementById(element);

const newText = get("newText");
const newBtn = get("newBtn");
const pendingList = get("pendingList");
const completedList = get("completedList");

newBtn.addEventListener("click", () => {
  if (newText.value != "") {
    const newTodo = document.createElement("li");
    newTodo.classList.add(
      "text-center",
      "p-3",
      "bg-white",
      "mt-4",
      "rounded",
      "shadow-lg",
      "cursor-pointer",
      "hover:bg-green-600"
    );
    newTodo.innerHTML = newText.value;
    newText.value = "";
    pendingList.appendChild(newTodo);
  } else {
    alert("Please provide a Task to Add");
  }
});

newText.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    newBtn.click();
  }
});

const move = (element, destination, convertTo) => {
  if (element.localName == "li") {
    if (convertTo == "completed") {
      element.classList.add(
        "text-red-600",
        "line-through",
        "hover:bg-red-600",
        "hover:text-white"
      );
      element.classList.remove("hover:bg-green-600");
    } else {
      element.classList.remove(
        "text-red-600",
        "line-through",
        "hover:bg-red-600",
        "hover:text-white"
      );
      element.classList.add("hover:bg-green-600");
    }
    destination.appendChild(element);
  }
};

pendingList.addEventListener("click", event => {
  move(event.target, completedList, "completed");
});

completedList.addEventListener("click", event => {
  move(event.target, pendingList, "pendings");
});