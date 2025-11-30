import { clearContent, content } from "./index.js";
import mainImg from "./fry.png";

export function createHomeContent() {

    clearContent();

    let mainHeading = document.createElement("div");
    mainHeading.classList.add("mainHeading");

    let left = document.createElement("div");
    left.classList.add("left");
    left.innerHTML = "INDULGE IN EVERY BITE <br> AT MAT'AM";

    let caption = document.createElement("p");
    caption.classList.add("caption");
    caption.innerHTML = "Where every dish tells a story <br> and every bite is a journey of taste.";

    let right = document.createElement("div");
    right.classList.add("right");

    let img = document.createElement("img");
    img.src = mainImg;
    img.classList.add("hero-image");

    right.appendChild(img);
    left.appendChild(caption);

    mainHeading.appendChild(left);
    mainHeading.appendChild(right);

    content.appendChild(mainHeading);
}