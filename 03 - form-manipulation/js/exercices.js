// Your code goes here
/* exo1 */

function validateForm() {
  const form = document.forms["exo3form"];
  const inputs = ["name", "email"];

  let valid = true;

  for (const input of inputs) {
    if (form[input].value === "") {
      alert(`${input} ne peux etre vide`);
      valid = false;
    }
  }

  let checkbox = document.getElementById("checkbox");

  if (!checkbox.checked) {
    alert("il daut cocher la case");
    valid = false;
  }

  if (valid === true) {
    let valName = document.getElementById("name").value;
    let valEmail = document.getElementById("email").value;
    console.log(valName);
    console.log(valEmail);
  }
}

/* exo n°3 */

function textChangeSelect() {
  let choice = document.querySelector("#choice");
  let textP = document.querySelector(".textToReplace");
  let selectedValue = choice.value;

  choice.addEventListener("change", () => {
    selectedValue = choice.value;
    updateText(textP, selectedValue);
  });

  updateText(textP, selectedValue);
}

function updateText(element, choice) {
  if (choice == "option2") {
    element.innerHTML = "essai2";
  } else {
    element.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minima?";
  }
}

/* test 4 */

// Liste de suggestions d'autocomplétion (peut provenir d'une source de données externe)
const suggestionsList = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Strawberry",
  "Watermelon",
];

// Éléments HTML
const inputField = document.getElementById("autocomplete");
const suggestionsContainer = document.getElementById("suggestions");

// Écouteur d'événement pour détecter la saisie de l'utilisateur
inputField.addEventListener("input", () => {
  const inputValue = inputField.value.toLowerCase();
  const filteredSuggestions = suggestionsList.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue)
  );

  // Afficher les suggestions filtrées
  displaySuggestions(filteredSuggestions);
});

// Affiche les suggestions sous le champ de texte
function displaySuggestions(suggestions) {
  // Effacer les anciennes suggestions
  suggestionsContainer.innerHTML = "";

  // Créer des éléments de suggestion et les ajouter au conteneur
  suggestions.forEach((suggestion) => {
    const suggestionElement = document.createElement("div");
    suggestionElement.textContent = suggestion;

    // Ajouter un écouteur d'événements pour remplir le champ de texte avec la suggestion sélectionnée
    suggestionElement.addEventListener("click", () => {
      inputField.value = suggestion;
      suggestionsContainer.innerHTML = ""; // Effacer les suggestions après la sélection
    });

    suggestionsContainer.appendChild(suggestionElement);
  });
}
/*  exo 5 */

let buttonDelete = document.querySelector("#delete");
let buttonAdd = document.querySelector("#add");

function addTextField() {
  const form = document.querySelector("#form");

  form.innerHTML +=
    '<label id="label">New Text</label> <input type="text" id="text"/> ';
}

function deleteTextField() {
  document.querySelector("#text").remove();
  document.querySelector("#label").remove();
}

/* exo 6 */

let currentStep = 1;

function showStep(step) {
  const steps = document.querySelectorAll(".step");
  steps.forEach((step, index) => {
    step.classList.remove("active");
    if (index + 1 === currentStep) {
      step.classList.add("active");
    }
  });
}

function nextStep() {
  if (validateStep(currentStep)) {
    if (currentStep === 2) {
      recap(); // Update the recap on the third step
    }
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  currentStep--;
  showStep(currentStep);
}

function validateStep(step) {
  // Add validation logic for each step here
  if (step === 1) {
    const name3 = document.getElementById("name3").value;
    if (!name3) {
      alert("Veuillez saisir votre nom.");
      return false;
    }
  } else if (step === 2) {
    const email3 = document.getElementById("email3").value;
    if (!email3 || !email3.includes("@")) {
      alert("Veuillez saisir une adresse email valide.");
      return false;
    }
  }
  return true;
}

function recap() {
  const name3 = document.getElementById("name3").value;
  const email3 = document.getElementById("email3").value;
  const summary = `Nom: ${name3}<br>Email: ${email3}`;
  document.getElementById("summary").innerHTML = summary;
}

function submitForm() {
  alert("You submitted the form!");
}

showStep(currentStep);
