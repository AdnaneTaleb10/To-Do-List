import "./css/style.css";
import logo from "./Assets/to-do-list.png";

let logoContainer = document.querySelector("#logo");
const favIcon = document.createElement("img");

favIcon.src = logo;
logoContainer.appendChild(favIcon);
