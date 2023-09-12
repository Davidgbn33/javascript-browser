/* Creation of the variable button via ID */
let button = document.getElementById('button');

/* Adding eventListener ("click"), and adding a function on click, (alert) */
button.addEventListener("click", function(){ alert("You clicked! :) "); }); 

/* Get the element and stock it in the variable */
const elementHover = document.getElementById('hover');

/* Add eventlistener on mouseenter and mouseleave (hover) to change the color of the text */
elementHover.addEventListener('mouseenter', function() {  elementHover.style.color = '#e74c3c';});
elementHover.addEventListener('mouseleave', function() {  elementHover.style.color = 'black';});

/* Get the input via QuerySelector */
const input = document.querySelector("input");

/* Add eventListener keydown, function logKey to get the key pressed */
input.addEventListener("keydown", logKey);

/* Log the key pressed in the console */
function logKey(e) {
  console.log(e.code);
}

/* Get the button and the dialog via ID */
const buttonShow = document.getElementById('my-button');
const dialog = document.getElementById('my-dialog');

/* Add eventlistener on click to the button to open Modal */
buttonShow.addEventListener('click', () => {dialog.showModal();});

/* Close dialog if click is different then click on my-div */
dialog.addEventListener('click', (event) => {
    if (event.target.id !== 'my-div') {
        dialog.close();
    }
});

/* Validating the input of the form, to see if the form is empty or not */
function validateForm() {
    /* Get the input from the form and store it in a variable */
    let nameInput = document.forms["form"]["name"].value;
    let emailInput = document.forms["form"]["email"].value;
    let phoneInput = document.forms["form"]["phonenumber"].value;

    /* check if the field is empty, if so return a alert and false to stop sending the form */
    if (nameInput == "") {
      alert("Name must be filled out");
      return false;
    }
    if (emailInput == "")   {
        alert('Email must be filled out');
        return false;
    }
    if (phoneInput == "")   {
        alert('You need to give a phone number')
        return false;
    }
  } 

/* Code to check the forms simplified */

function validateForm() {
    const form = document.forms["form"];
    const inputs = ["name", "email", "phonenumber"];

    for (const input of inputs) {
        if (form[input].value === "") {
            alert(`${input.charAt(0).toUpperCase() + input.slice(1)} must be filled out`);
            return false;
        }
    }

    return true;
}

window.addEventListener('scroll', function() {
    // Récupérez la position actuelle de défilement
    const scrollY = window.scrollY;

    // Vérifiez la position actuelle de défilement et effectuez une action en fonction
    if (scrollY > 3000) { // Exemple : Changez la couleur d'arrière-plan à partir de 200 pixels de défilement
        document.body.style.backgroundColor = 'green'; // Changez la couleur d'arrière-plan
    }else if (scrollY > 1200) { // Exemple : Changez la couleur d'arrière-plan à partir de 200 pixels de défilement
        document.body.style.backgroundColor = 'blue'; // Changez la couleur d'arrière-plan
    }else{
        document.body.style.backgroundColor = 'white';
    }
});


