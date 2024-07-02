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

  console.log("User input is:", userInputData);
  console.log("Role input is:", roleData);

  const dataObj = {
    name: capitalizeFirstLetter(userInputData),
    role: roleData,
  };

  users.push(dataObj);
  console.log("Users array:", users); // Log the users array
  renderUserData(users);
  updateUI();
  clearInputs();
};

// const renderUserData = (name, role) => {
//   const userElement = document.createElement("tr");
//   userElement.innerHTML = `
//     <td>${name}</td>
//     <td>${role}</td>
//   `;

//   const trTable = document.getElementById("table-body");
//   trTable.append(userElement);
// };

const renderUserData = (userData) => {
  const tbTable = document.getElementById("table-body");
  tbTable.innerHTML = ""; // Clear existing table data

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
  console.log("Selected value: " + selectedValue);

  console.log("Users array for filtering:", users);

  const filteredUsers = users.filter((user) => user.role === selectedValue);

  console.log("Filtered users:", filteredUsers);

  renderUserData(filteredUsers); // Render only filtered users
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

submitBtn.addEventListener("click", userData);
selectBtn.addEventListener("change", filterUser);
