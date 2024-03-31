const inputText = document.querySelector("#full-name");
const submitBtn = document.querySelector("button");

const validationRadio = () => {
  let valid = false;
  let radios = document.getElementsByName("role");

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      valid = true;
      break;
    }
  }

  if (valid) {
    console.log(first);
  } else {
    alert("validation edhe ma mut ");
  }
};

submitBtn.addEventListener("click", () => {
  const textInput = inputText.value;

  if (textInput.trim() === "") {
    alert("Please enter valid values");
    return;
  }
  validationRadio();
});
