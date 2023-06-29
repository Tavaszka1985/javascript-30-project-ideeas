const panels = document.querySelectorAll(".panel");

/* const toggleOpen = (event) => {
  const panel = event.target;
  if (panel.classList.contains("open")) {
    panel.classList.remove("open");
  } else {
    panel.classList.add("open");
  }
}; */

/* const toggleOpen = (event) => {
  console.log(event.target.classList);
  event.target.classList.add("open");
}; */

const toggleActive = (event) => {
  console.log(event.propertyName);
  if (event.propertyName.includes("flex")) {
    event.target.classList.toggle("open-active");
  }
};

function toggleOpen(event) {
  console.log(event.target.classList);
  this.classList.toggle("open");
}

/* function toggleActive(event) {
  console.log(event.propertyName);
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
} */

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
