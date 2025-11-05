import './style.css';
let nav = document.createElement("nav");
nav.classList.add("header");

let home = document.createElement("button");
home.textContent = "Home";

let menu = document.createElement("button");
menu.textContent = "Menu";

let about = document.createElement("button");
about.textContent = "About";

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(about);
document.body.appendChild(nav);