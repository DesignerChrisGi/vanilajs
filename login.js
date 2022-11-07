const loginInput = document.querySelector("#loginInput");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const listContainer = document.querySelector("#listContainer");

const STEALTH_MODE = "hide";
const LOCAL_KEY_NAME = "name";

const nameInLocalStorage = localStorage.getItem(LOCAL_KEY_NAME);

if (nameInLocalStorage === null) {
  loginForm.className = " ";
  header.classList.add("hide");
  listContainer.classList.add("hide");
  footer.classList.add("hide");
  todoForm.className = "hide";
} else {
  greetingMessage(nameInLocalStorage);
  loginForm.className = STEALTH_MODE;
  header.classList.add("align-center");
  listContainer.classList.remove("hide");
  footer.classList.remove("hide");
  todoForm.className = " ";
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.className = STEALTH_MODE;
  header.classList.add("align-center");
  listContainer.classList.remove("hide");
  footer.classList.remove("hide");
  todoForm.className = " ";

  const value_username = event.target[0].value;
  localStorage.setItem(LOCAL_KEY_NAME, value_username);
  greetingMessage(value_username);
}

function greetingMessage(name) {
  greeting.innerText = `안녕하세요, ${name} 님`;
  greeting.className = " ";
}

function signout() {
  localStorage.removeItem(LOCAL_KEY_NAME);
  loginForm.className = " ";
  loginInput.value = null;
  location.reload();
}
