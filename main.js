// List of tasks
const task = {
    task1: {
        name: "Tâche 1",
        state: 0
    },
    task2: {
        name: "Tâche 2",
        state: 0
    },
    task3: {
        name: "Tâche 3",
        state: 0
    },
    task4: {
        name: "Tâche 4",
        state: 0
    }
}

// Display list of tasks
function loadTasks() {

    // Display list of tasks
    for (let i = 0; i < Object.keys(task).length; i++)
    {
        // Display html code here :/
        console.log(task.task1.name);
    }
}

// Add task to object
function addTask() {
    var taskToAdd = document.getElementById("taskToAdd").value;

    // Checking empty textbox
    if (!taskToAdd)
        alert('Textbox cannot be empty !');
    else
    {
        // Add task to Object here
    }
}

// Cancel task
function cancelTask() {
    document.getElementById("taskToAdd").value = "";
}

// Use keyboard
document.addEventListener("keydown", KeyCheck);
function KeyCheck(event) {
    var KeyID = event.keyCode;
    switch (KeyID)
    {
        // Enter
        case 13:
            addTask();
            break;
        // Escape
        case 27:
            cancelTask();
            break;
    }
}