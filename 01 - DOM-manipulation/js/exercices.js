/* EXERCISE 1*/

/* Injecter text dans l'ID paragraph via innerHTML */
document.getElementById("paragraph").innerHTML = "Hello World!";

/* injection dans le dom via une fonction*/
let paragraph = document.querySelector("#paragraph");

function addTextInside(cible, contenu) {
  cible.innerText = contenu;
}
/* injection dans le dom via une fonction plus large spectre*/
addTextInside(paragraph, "bonjour DOM");

function modifyHtml(type, target, content) {
  if (type === "text") {
    target.innerText = content;
  }
  if (type === "image") {
    target.src = content;
  }
}

modifyHtml("text", paragraph, "Bonjour");

/* Changer image via .src */
document.getElementById("image").src = "/images/test2.png";

/* ////////////////////////////////////////////////////////////////////////// */
/* Creation du bouton */
let newButton = document.createElement("button");

/* creation de l'ID du bouton */
newButton.id = "button";
/* Injection du bouton dans le div en tant que enfant */
document.getElementById("div").appendChild(newButton);

/* Creation du text dans le bouton */
let newButtonText = document.createTextNode("Cliquez ici!");

/* injection du text dans le bouton */
newButton.appendChild(newButtonText);

/* ////////////////////////////////////////////////////////////////////////// */

/* Selecting the class, adding new class name and remove class name */
const para = document.querySelector(".para");
para.classList.add("newPara");
para.classList.remove("para");

/* ////////////////////////////////////////////////////////////////////////// */

/* Creation du liste des noms */
let list = ["alice", "bob", "charlie"];

/* Creation of the for loop, create li, add name into li, select ul, create child of ul */
for (i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = list[i];
  document.querySelector("ul").append(li);
}

/* Remove an element via ID */
const liToRemove = document.getElementById("3");
liToRemove.remove();

/* ////////////////////////////////////////////////////////////////////////// */

/* Hide an element with Display: none */
document.getElementById("2").style.display = "none";
