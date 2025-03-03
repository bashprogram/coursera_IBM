const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = [];

// Add event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);
displayTasks();

// Add task function
function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks();
            }
            console.log("addTask button pressed")
        }

// Display tasks function
function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            console.log("Task element:", li.textContent);
            });
        }

// Toggle task function
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}
 
// Clear completed tasks function
function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        displayTasks();
    }

// Clear all tasks function
function clearAllTasks() {
    tasks = [];
    displayTasks();
}