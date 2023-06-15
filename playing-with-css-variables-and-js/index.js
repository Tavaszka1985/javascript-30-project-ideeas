const inputs = document.querySelectorAll(".controls input");

const handleUpdate = (event) => {
  console.log(event.target.value);
};

/* function handleUpdate() {
  console.log(this.value);
} */

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
