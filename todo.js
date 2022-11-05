const LOCAL_KEY_TODOS = "todos";

let todoListArray = [];

const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.getElementById("todoList");

const todoInLocalStorage = localStorage.getItem(LOCAL_KEY_TODOS);

if (todoInLocalStorage !== null) {
  const parsedTodo = JSON.parse(todoInLocalStorage); //string to array
  todoListArray = parsedTodo;
  todoListArray.forEach((todo) => renderTodo(todo));
}

function renderTodo(todoInArray) {
  console.log("todoInArray", todoInArray);
  const generatedLi = document.createElement("li");
  generatedLi.id = todoInArray.id;

  const generatedSpan = document.createElement("span");
  generatedSpan.innerText = todoInArray.text;

  const generatedButton = document.createElement("button");
  generatedButton.innerText = "🙅🏻";
  generatedButton.addEventListener("click", deleteTodo);

  generatedLi.appendChild(generatedSpan);
  generatedLi.appendChild(generatedButton);
  todoList.appendChild(generatedLi);
}

function deleteTodo(event) {
  const parentLi = event.target.parentElement; // generatedLi is the parent of the button
  todoListArray = todoListArray.filter(
    (objectInArray) => objectInArray.id !== parseInt(parentLi.id)
  );
  parentLi.remove();
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(LOCAL_KEY_TODOS, JSON.stringify(todoListArray));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = event.target[0].value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(), //unique한 아이디를 주고 싶었던 그의 마음...
    text: newTodo,
  };

  todoListArray.push(newTodoObj);
  renderTodo(newTodoObj);
  saveTodo();
}
