import './style.css';
import fries from './fries.png';
import nuggets from './nuggets.png';
import tacos from './taco.png';
import main from './fry.png';

let content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

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
content.appendChild(nav);

function clearContent () {
    content.innerHTML = "";
    content.appendChild(nav);
}
function createHomeContent () {

clearContent(); 

let mainHeading = document.createElement("div");
mainHeading.classList.add("mainHeading");

let left = document.createElement("div");
left.classList.add("left");
left.innerHTML = "INDULGE IN EVERY BITE <br> AT MAT'AM";
let caption = document.createElement("p");
caption.classList.add("caption");
caption.innerHTML = "Where every dish tells a story <br> and every bite is a journey of taste."

let right = document.createElement("div");
right.classList.add("right");
let img = document.createElement("img");
img.src = main; 
img.classList.add("hero-image"); 
right.appendChild(img);

left.appendChild(caption);
mainHeading.appendChild(left);
mainHeading.appendChild(right);
content.appendChild(mainHeading);
}

window.addEventListener("DOMContentLoaded", () => {
    createHomeContent();
})

home.addEventListener("click", () => {
    createHomeContent();
})

menu.addEventListener("click", () => {

clearContent();

let dishes = document.createElement("div");
dishes.classList.add("dishes");

//Frame 1 (Fries):

let dish1 = document.createElement("div");
dish1.classList.add("dish1");
dish1.style.backgroundImage = `url(${fries})`;

let outer1 = document.createElement("div");
outer1.classList.add("outer");
outer1.appendChild(dish1);

let name1 = document.createElement("h2");
name1.classList.add("name");
name1.textContent = "French Fries";
outer1.appendChild(name1);

let description = document.createElement("p");
description.classList.add("description");
description.textContent = "Cripsy, golden fried with seasoning";
outer1.appendChild(description);

//Frame 2 (Nuggets):
let dish2 = document.createElement("div");
dish2.classList.add("dish2");
dish2.style.backgroundImage = `url(${nuggets})`;

let outer2 = document.createElement("div");
outer2.classList.add("outer");
outer2.appendChild(dish2);

let name2 = document.createElement("h2");
name2.classList.add("name");
name2.textContent = "Nuggets";
outer2.appendChild(name2);

let description2 = document.createElement("p");
description2.classList.add("description");
description2.textContent = "Tender chicken nuggets, perfectly crispy";
outer2.appendChild(description2);

//Frame 3 (Tacos):

let dish3 = document.createElement("div");
dish3.classList.add("dish3");
dish3.style.backgroundImage = `url(${tacos})`;

let outer3 = document.createElement("div");
outer3.classList.add("outer");
outer3.appendChild(dish3);

let name3 = document.createElement("h2");
name3.classList.add("name");
name3.textContent = "Tacos";
outer3.appendChild(name3);

let description3 = document.createElement("p");
description3.classList.add("description");
description3.textContent = "Soft tacos, filled with flavor";
outer3.appendChild(description3);


dishes.append(outer1, outer2, outer3);

content.appendChild(dishes);

});

about.addEventListener("click", ()  => { 

    clearContent();

    let about = document.createElement("div");
    about.classList.add("about-container");

    let heading = document.createElement("h1");
    heading.textContent = "About Us";
    heading.classList.add("about-heading");

    let exp = document.createElement("p");
    exp.textContent = "Welcome to Mat'am, where every dish is made fresh with love. Our crispy fries, tender nuggets and flavorful tacos are crafted to delight every taste bud. Come enjoy a cozy dining experience with us!";
    exp.classList.add("about-exp");

    about.appendChild(heading);
    about.appendChild(exp);
    content.appendChild(about);

})
