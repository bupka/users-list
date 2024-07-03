const inputText = document.querySelector("#name");
const inputRole = document.getElementsByName("role");
const submitBtn = document.querySelector("button");
const table = document.getElementById("users-data");
const entryTextSection = document.getElementById("entry-text");
const selectBtn = document.getElementById("mySelect");

let users = [];

const updateUI = () => {
  if (users.length === 0) {
    table.style.display = "none";
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
    table.style.display = "table";
  }
};

const clearInputs = () => {
  inputText.value = "";
  for (const input of inputRole) {
    if (input.checked) {
      input.checked = false;
    }
  }
};

const userData = () => {
  const userInputData = inputText.value;
  let roleData;

  for (let i = 0; i < inputRole.length; i++) {
    if (inputRole[i].checked) {
      roleData = inputRole[i].value;
    }
  }

  if (userInputData.trim() === "" || !roleData) {
    alert("Please enter valid values!");
    return;
  }

  const dataObj = {
    name: capitalizeFirstLetter(userInputData),
    role: roleData,
  };

  users.push(dataObj);
  renderUserData(users);
  updateUI();
  clearInputs();
};

const renderUserData = (userData) => {
  const tbTable = document.getElementById("table-body");
  tbTable.innerHTML = "";

  userData.forEach((user) => {
    const userElement = document.createElement("tr");
    userElement.innerHTML = `
      <td>${user.name}</td>
      <td>${user.role}</td>
    `;
    tbTable.append(userElement);
  });
};

const filterUser = () => {
  const selectEl = document.getElementById("mySelect");
  const selectedValue = selectEl.value;

  if (selectedValue === "all") {
    renderUserData(users);
  } else {
    const filteredUsers = users.filter((user) => user.role === selectedValue);
    renderUserData(filteredUsers);
  }
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

submitBtn.addEventListener("click", userData);
selectBtn.addEventListener("change", filterUser);
