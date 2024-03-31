const inputText = document.querySelector("#full-name");
const inputRole = document.getElementsByName("role");
const submitBtn = document.querySelector("button");
const entryTextSection = document.getElementById("entry-text");

let users = [];

const userData = () => {
  const userInputData = inputText.value;
  let roleData;

  if (userInputData.trim() === "") {
    alert("Please fill the input field");
    return;
  }
  console.log("User input is:", userInputData);

  for (let i = 0; i < inputRole.length; i++) {
    if (inputRole[i].checked) {
      roleData = inputRole[i].value;
    }
  }

  if (!roleData) {
    alert("Please select one of the options");
    return;
  }
  console.log("Role input is:", roleData);

  const dataObj = {
    name: userInputData,
    role: roleData,
  };

  console.log(dataObj);

  renderUserData(dataObj.name, dataObj.role);
  inputText.value = "";
  inputRole.values = "";
};

const renderUserData = (name, role) => {
  const userElement = document.createElement("tr");
  userElement.innerHTML = `
    <td>${name}</td>
    <td>${role}</td>
  `;

  const trTable = document.getElementById("table-body");
  trTable.append(userElement);
};

submitBtn.addEventListener("click", userData);
