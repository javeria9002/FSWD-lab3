// 1. Confirm script.js is linked and running
console.log("script.js is linked and running");

// 2. Select the Add button with getElementById and log it
const addBtn = document.getElementById("addBtn");
console.log(addBtn);

// 3. Add a click listener that just logs "clicked"
addBtn.addEventListener("click", function () {
  console.log("clicked");
});

// 4. Create one hard-coded <li> and append it to taskList
const taskList = document.getElementById("taskList");
const hardCodedItem = document.createElement("li");
hardCodedItem.textContent = "Hard-coded test task";
taskList.appendChild(hardCodedItem);
