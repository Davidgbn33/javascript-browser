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
/*  exo 2 */
