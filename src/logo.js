import headerLogo from "./Assets/to-do-list.png";
import favicon from "./Assets/logo.png";
import create from "./domCreate";

export default function setImages() {
  // Favicon
  let headTitle = document.querySelector("head");
  let setFavicon = create.el("link");
  setFavicon.setAttribute("rel", "shortcut icon");
  setFavicon.setAttribute("href", favicon);

  headTitle.appendChild(setFavicon);

  // Header logo
  let logoDiv = document.querySelector("#logo");

  let logo = create.imgWithSrc(headerLogo);
  logo.style.width = "1.8em"
  let logoText = create.el("p", "To-Do-List");
  logoText.style.color = "var(--french-gray)";

  logoDiv.appendChild(logo);
  logoDiv.appendChild(logoText);
}

setImages();
