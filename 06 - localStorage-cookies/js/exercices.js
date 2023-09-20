// exo 1

let textExo1 = document.querySelector('#text');

let submit = document.querySelector('#submit');
let form = document.querySelector('#form');

let mydiv = document.querySelector('#my-div');
let mydiv2 = document.querySelector('#my-div2');

let localStorage;

// Écouter l'événement de soumission du formulaire

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  localStorage = document.getElementById('text').value;
  console.log(localStorage);

  mydiv.innerHTML = localStorage;

  document.cookie = (localStorage);
  mydiv2.innerHTML = document.cookie;
}

// exo 5

let deleteLocalstorage = document.querySelector("#deleteButton");

deleteLocalstorage.addEventListener('click', deleteL)

function deleteL() {
localStorage = null
console.log(localStorage);
}

// exo 6

let deleteButtonCookie = document.querySelector("#deleteButtonCookies")

deleteButtonCookie.addEventListener('click', deleteC);

function deleteC(){
  document.cookie = null;
  console.log(document.cookie);
}

// ouverture de la boite de dialog

/* Get the button and the dialog via ID */
const buttonShow = document.getElementById('my-button');
const dialog = document.getElementById('my-dialog');

/* Add eventlistener on click to the button to open Modal */
buttonShow.addEventListener('click', () => {
  dialog.showModal();
});

/* Close dialog if click is different then click on my-div */
dialog.addEventListener('click', (event) => {
  if (event.target.id !== 'my-div') {
    dialog.close();
  }
});
// ouverture de la boite de dialog2

/* Get the button and the dialog via ID */
const buttonShow2 = document.getElementById('my-button2');
const dialog2 = document.getElementById('my-dialog2');

/* Add eventlistener on click to the button to open Modal */
buttonShow2.addEventListener('click', () => {
  dialog2.showModal();
});

/* Close dialog if click is different then click on my-div */
dialog2.addEventListener('click', (event) => {
  if (event.target.id !== 'my-div2') {
    dialog2.close();
  }
});
