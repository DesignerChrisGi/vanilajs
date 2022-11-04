const loginInput = document.querySelector("#loginInput");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");

const STEALTH_MODE = "hide";
const LOCAL_KEY_NAME = "name";

const nameInLocalStorage = localStorage.getItem(LOCAL_KEY_NAME);

if (nameInLocalStorage === null) {
  loginForm.className = " ";
} else {
  greetingMessage(nameInLocalStorage);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.className = STEALTH_MODE;
  const value_username = event.target[0].value;
  localStorage.setItem(LOCAL_KEY_NAME, value_username);
  greetingMessage(value_username);
}

function greetingMessage(name) {
  greeting.innerText = `안녕하세요, ${name} 님`;
  greeting.className = " ";
}
