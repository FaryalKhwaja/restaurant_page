import { clearContent, content } from "./index.js";
import fries from "./fries.png";
import nuggets from "./nuggets.png";
import tacos from "./taco.png";

export function createMenuContent() {

    clearContent();

    let dishes = document.createElement("div");
    dishes.classList.add("dishes");

    // Frame 1
    let outer1 = document.createElement("div");
    outer1.classList.add("outer");

    let dish1 = document.createElement("div");
    dish1.classList.add("dish1");
    dish1.style.backgroundImage = `url(${fries})`;

    let name1 = document.createElement("h2");
    name1.textContent = "French Fries";

    let description1 = document.createElement("p");
    description1.textContent = "Crispy, golden fried with seasoning";

    outer1.append(dish1, name1, description1);

    // Frame 2
    let outer2 = document.createElement("div");
    outer2.classList.add("outer");

    let dish2 = document.createElement("div");
    dish2.classList.add("dish2");
    dish2.style.backgroundImage = `url(${nuggets})`;

    let name2 = document.createElement("h2");
    name2.textContent = "Nuggets";

    let description2 = document.createElement("p");
    description2.textContent = "Tender chicken nuggets, perfectly crispy";

    outer2.append(dish2, name2, description2);

    // Frame 3
    let outer3 = document.createElement("div");
    outer3.classList.add("outer");

    let dish3 = document.createElement("div");
    dish3.classList.add("dish3");
    dish3.style.backgroundImage = `url(${tacos})`;

    let name3 = document.createElement("h2");
    name3.textContent = "Tacos";

    let description3 = document.createElement("p");
    description3.textContent = "Soft tacos, filled with flavor";

    outer3.append(dish3, name3, description3);

    dishes.append(outer1, outer2, outer3);

    content.appendChild(dishes);
}