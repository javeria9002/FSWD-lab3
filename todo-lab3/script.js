console.log("Script connected");

// ---------- Selecting DOM Elements ----------
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const errorMessage = document.getElementById("errorMessage");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// ---------- Task 1: Creating a task element ----------
function createTaskElement(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Task 2: Mark Tasks Complete (Classes + Events)
  // Clicking anywhere on the li toggles "completed", but a click on the
  // Delete button itself should not also toggle completion.
  li.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      return;
    }
    li.classList.toggle("completed");
  });

  return li;
}

// ---------- Task 4: Live Task Counter and Empty-State Message ----------
function updateTaskCount() {
  const total = taskList.children.length;
  taskCount.textContent = total === 0 ? "No tasks yet." : `${total} tasks`;
}

// ---------- Task 5: Prevent Empty Submissions (Form Validation) ----------
function addTask() {
  const value = taskInput.value.trim();

  if (value === "") {
    errorMessage.textContent = "Please type a task before adding it.";
    return;
  }

  errorMessage.textContent = "";
  const li = createTaskElement(value);
  taskList.appendChild(li);
  taskInput.value = "";
  updateTaskCount();
}

// ---------- Task 1: Add and Display Tasks (Selection + Creation + Events) ----------
addBtn.addEventListener("click", () => {
  addTask();
});

taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Clear the error as soon as the user starts typing again
taskInput.addEventListener("input", () => {
  if (taskInput.value.trim() !== "") {
    errorMessage.textContent = "";
  }
});

// ---------- Task 3: Delete Tasks (Event Delegation) ----------
// One listener on the parent (taskList) handles Delete clicks for every
// task, including ones created after the page loaded.
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("li").remove();
    updateTaskCount();
  }
});

// ---------- Task 6: Extend the Application (Clear Completed) ----------
// Uses querySelectorAll + a loop, as suggested in the lab manual.
clearCompletedBtn.addEventListener("click", () => {
  const completedTasks = taskList.querySelectorAll("li.completed");
  completedTasks.forEach((task) => task.remove());
  updateTaskCount();
});

// Initialize the counter/empty-state message on page load
updateTaskCount();
