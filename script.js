const checkbox = document.getElementById("divStyle");
const textfields = document.getElementsByClassName("textfield");
const button = document.querySelector("#removeButton");
const myDiv = document.querySelector("div");

function updateContent(e) {
  const inputId = e.target.id;
  console.log(e.target);

  if (inputId === "content") {
    myDiv.innerHTML = e.target.value;
  }
}
checkbox.addEventListener("change", function () {
  const color = textfields[0].value;
  myDiv.style.backgroundColor = color;
});
for (let i = 0; i < textfields.length; i++) {
  textfields[i].addEventListener("input", updateContent);
}
button.addEventListener("click", function () {
  myDiv.remove();
});
