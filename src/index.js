import "./style.css";
import { createHomeContent } from "./home.js";
import { createMenuContent } from "./menu.js";
import { createAboutContent } from "./about.js";

export const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

let nav = document.createElement("nav");
nav.classList.add("header");

let homeBtn = document.createElement("button");
homeBtn.textContent = "Home";

let menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";

let aboutBtn = document.createElement("button");
aboutBtn.textContent = "About";

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(aboutBtn);
content.appendChild(nav);

export function clearContent() {
    content.innerHTML = "";
    content.appendChild(nav);
}

window.addEventListener("DOMContentLoaded", () => {
    createHomeContent();
});

homeBtn.addEventListener("click", createHomeContent);
menuBtn.addEventListener("click", createMenuContent);
aboutBtn.addEventListener("click", createAboutContent);