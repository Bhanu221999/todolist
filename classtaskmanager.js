
// Class representing a Task
class Task {
    constructor(title, createdDate, dueDate, priority) {
    // Initialize task properties
      this.title = title;
      this.createdDate = createdDate;
      this.dueDate = dueDate;
      this.priority = priority;
      this.completed = false;
    }
  }
  
  // Class managing tasks and their interactions
  class TaskManager {
    constructor() {
        // Initialize properties and set up event listeners
      this.taskList = document.getElementById("taskList");
      this.submitBtn = document.getElementById("submitBtn");
      this.editTaskBtn = document.getElementById("editTask");
      this.tasksHeading = document.getElementById("heading-tasks");
      this.modeToggleBtn = document.getElementById("modeToggle");
      this.checkboxes = document.querySelectorAll(".form-check-input");
      this.editItem = null;
      this.tasksWithPriority = [];
      this.priorityColors = {
        'High': 'task-priority-High',
        'Medium': 'task-priority-Medium',
        'Low': 'task-priority-Low',
      };
  
    // Set up event listeners and initialize
      this.addEventListeners();
      this.init();
    }
  
        // Set up event listeners for buttons
    addEventListeners() {
      this.editTaskBtn.addEventListener("click", (e) => this.handleEditClick(e));
      this.submitBtn.addEventListener("click", (e) => this.addItem(e));
      // Add other event listeners as needed
    }
  
        // Initialize the task manager, set up initial state
    init() {
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("light-mode");


        // Load tasks from local storage and perform tasks check
      this.loadTasksFromLocalStorage();
      this.tasksCheck();
    }
  
        // Check if there are tasks, adjust UI accordingly
    tasksCheck() {
      const tasks = this.taskList.children;
  
      if (tasks.length === 0) {
        this.tasksHeading.classList.toggle("hidden");
        document.querySelector(".clear_btn").style.display = "none";
        document.querySelector(".dropdown").style.display = "none";
      }
    }
  
        // Handle editing a task item
    handleEditItem(e) {
      e.preventDefault();
      this.editTaskBtn.style.display = "inline";
      this.submitBtn.style.display = "none";
  
            // Retrieve task details for editing
      const taskTitle = e.target.parentElement.childNodes[1].textContent.trim();
      document.getElementById("item").value = taskTitle;
      this.editItem = e.target;
    }
  
        // Handle the click event when the Edit button is clicked
    handleEditClick(e) {
      e.preventDefault();
  
            // Retrieve input elements for editing
      const itemInput = document.getElementById("item");
      const dueDateInput = document.getElementById("dueDate");
  
            // Retrieve edited item details
      const editedItemText = itemInput.value;
      const editedDueDate = new Date(dueDateInput.value);
      const currentDate = new Date().toISOString().split("T")[0];
  
            // Validate due date
      if (editedDueDate < new Date(currentDate)) {
        this.displayErrorMessage("Due date has already passed");
        return false;
      }
  
            // Update the task details in the UI
      const listItem = this.editItem.parentElement;
      listItem.childNodes[1].textContent = editedItemText;
  
      if (editedDueDate >= new Date(currentDate)) {
        listItem.childNodes[5].textContent = `Due Date:${dueDateInput.value}`;
      }
  
            // Display success message and reset values
      this.displaySuccessMessage("Task edited successfully");
      this.editItem = null;
      itemInput.value = "";
      dueDateInput.value = "";
  
      this.editTaskBtn.style.display = "none";
      this.submitBtn.style.display = "inline";

            // Save tasks to local storage
      this.saveTasksToLocalStorage();
    }

        // Delete a task by title
    deleteTask(taskTitle) {
        const taskElement = findTaskElement(taskTitle);
      
        if (taskElement) {
          taskElement.remove();
          saveTasksToLocalStorage();
          displaySuccessMessage(`Task "${taskTitle}" deleted successfully.`);
        } else {
          displayErrorMessage(`Task "${taskTitle}" not found.`);
        }
      }  
  }
  // Function to handle item click events
  function handleItemClick(e) {
    if (e.target.classList.contains("delete")) {
      e.preventDefault();
      const li = e.target.parentElement;
      const confirmationBox = document.getElementById("custom-confirm");
      document.getElementById("confirm-msg").style.backgroundColor = "White";
      document.getElementById("confirm-msg").style.color = "Black";
      document.getElementById("confirm-msg").innerText =
        "Are you sure you want to delete this task?";
      const confirmYesButton = document.getElementById("confirm-yes");
      const confirmNoButton = document.getElementById("confirm-no");
      const confirmCancelButton = document.getElementById("confirm-cancel");
  
      const handleYesClick = () => {
        confirmationBox.style.display = "none";
        li.parentElement.removeChild(li);
        tasksCheck();
        displaySuccessMessage("Task deleted successfully");
        saveTasksToLocalStorage();
         confirmYesButton.removeEventListener("click", handleYesClick);
        confirmNoButton.removeEventListener("click", handleNoClick);
        confirmCancelButton.removeEventListener("click", handleCancelClick);
      };
  
       const handleNoClick = () => {
        confirmationBox.style.display = "none";
        confirmYesButton.removeEventListener("click", handleYesClick);
        confirmNoButton.removeEventListener("click", handleNoClick);
        confirmCancelButton.removeEventListener("click", handleCancelClick);
      };
  
      const handleCancelClick = () => {
        confirmationBox.style.display = "none";
        confirmYesButton.removeEventListener("click", handleYesClick);
        confirmNoButton.removeEventListener("click", handleNoClick);
        confirmCancelButton.removeEventListener("click", handleCancelClick);
      };
  
      confirmYesButton.addEventListener("click", handleYesClick);
      confirmNoButton.addEventListener("click", handleNoClick);
      confirmCancelButton.addEventListener("click", handleCancelClick);
  
      confirmationBox.style.display = "flex";
    }
    saveTasksToLocalStorage();
  }  
  
  // Instantiate TaskManager
  const taskManager = new TaskManager();
  

