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
