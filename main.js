function addTask() {
    var taskToAdd = document.getElementById("taskToAdd").value;

    // Checking empty textbox
    if (!taskToAdd)
        alert('Textbox cannot be empty !');
    else
    {
        alert('Adding task ...');
    }
}
function cancelTask() {
    document.getElementById("taskToAdd").value = "";
}

// Use keyboard
document.addEventListener("keydown", KeyCheck);
function KeyCheck(event) {
    var KeyID = event.keyCode;
    switch (KeyID)
    {
        // Entrée
        case 13:
            addTask();
            break;
        // Echap
        case 27:
            cancelTask();
            break;
    }
}