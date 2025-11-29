import { clearContent, content } from "./main.js";

export function createAboutContent() {

    clearContent();

    let about = document.createElement("div");
    about.classList.add("about-container");

    let heading = document.createElement("h1");
    heading.classList.add("about-heading");
    heading.textContent = "About Us";

    let exp = document.createElement("p");
    exp.classList.add("about-exp");
    exp.textContent =
        "Welcome to Mat'am, where every dish is made fresh with love. Our crispy fries, tender nuggets and flavorful tacos are crafted to delight every taste bud. Come enjoy a cozy dining experience with us!";

    about.append(heading, exp);
    content.appendChild(about);
}
