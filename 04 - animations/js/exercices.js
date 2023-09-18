let showDiv = document.querySelector(".para");
let addElement = document.querySelector("#addElement");

let moveElement = document.querySelector("#moveElement");
let rotateElement = document.querySelector("#rotateElement");

addElement.addEventListener("click", () => {
  showDiv.classList.add("fade-in");
});

moveElement.addEventListener("click", () => {
  showDiv.classList.add("move");
});
rotateElement.addEventListener("click", () => {
  showDiv.classList.add("rotate");
});

let showDiv2 = document.querySelector(".para2");
let colorChange = document.querySelector("#colorChange");

colorChange.addEventListener("click", () => {
  if (showDiv2.classList.contains("colorChange")) {
    showDiv2.classList.remove("colorChange");
    void showDiv2.offsetWidth;
  }
  showDiv2.classList.add("colorChange");
});

let showDiv3 = document.querySelector(".para3");
let growChange = document.querySelector("#growChange");

growChange.addEventListener("click", () => {
  if (showDiv3.classList.contains("growChange")) {
    showDiv3.classList.remove("growChange");
    void showDiv3.offsetWidth;
  }
  showDiv3.classList.add("growChange");
});

/* exo  6 */
function handleScrollAppear() {
  const appearElements = document.querySelectorAll("[data-appear]");
  appearElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Check if the element is in the viewport
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      element.classList.add("appeared");
    }
  });
}

// Attach the scroll event listener to trigger the appearance
window.addEventListener("scroll", handleScrollAppear);

// Initial check in case some elements are already in the viewport
handleScrollAppear();
