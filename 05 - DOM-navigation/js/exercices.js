/* Exo 1 */

// je récupere l'id de l'ul
let elem = document.querySelector("#liste1");
// je me fait un tableau de mes li
let listElem = elem.getElementsByTagName("li");
// je change la couleur du texte en rouge

for (i = 0; i < listElem.length; i++) {
  listElem[i].style.color = "blue";
}

listElem[1].style.color = "red";

/* exo 2 */

let exo2Elem = document.getElementById("paragraphe1");

exo2Elem.innerHTML = "Ca marche !!!!!!!!!!!!!!!";

/* exo 3 */

// premier exemple
let exo3elem = document.querySelector("#exo3elem");

let listexo3 = exo3elem.getElementsByTagName("p");
let current = listexo3[0];

let nextSibling = current.nextElementSibling;

nextSibling.style.fontSize = "2rem";

// second exemple
// récupere le 3 p après notre div avec l'id exo3elem
let nextSibling2 = exo3elem.querySelector("p + p + p");

if (nextSibling2) {
  nextSibling2.style.fontSize = "4rem";
}

/* exo 4 */

let exo4Elem = document.querySelector("#exo4Elem");

let ParentExo4Elem = exo4Elem.parentElement;

ParentExo4Elem.classList.add("test");

/* exo 5 */

let Sousliste = document.querySelector("#sousListe");

Sousliste.parentElement.classList.add("ulClass5");

let liste2 = document.querySelector("#liste2");

liste2.children[1].style.color = "orange";

/* exo 6 */
