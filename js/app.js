/*     Vars
-----------------*/

var btn_addTask             = document.getElementsByTagName("button")[0];
var txt_newTaskDescription  = document.getElementById("new-task");
var lst_incompleteTasks     = document.getElementById("incomplete-tasks");
var lst_completedTasks      = document.getElementById("completed-tasks");

/*   Functions
-----------------*/

function AddTaskToIncompleteTaskList() {
  if (txt_newTaskDescription.value === "") {
    alert("Can't add a blank task. How would you complete it?");
    return;
  }
  
  var li_newTask = New("li");
  
  var chk_new = New("input checkbox");
  chk_new.onchange = ToggleComplete;
  li_newTask.appendChild(chk_new);
  
  var lbl_new = New("label");  
  lbl_new.appendChild(New("text " + txt_newTaskDescription.value));
  txt_newTaskDescription.value = "";
  li_newTask.appendChild(lbl_new);
  
  li_newTask.appendChild(New("input text"));
  
  var btn_new = New("button");
  btn_new.appendChild(New("text Edit"));
  li_newTask.appendChild(btn_new);
  btn_new.classList.add("edit");
  btn_new.onclick = ToggleEditMode;
  
  btn_new = New("button");
  btn_new.classList.add("delete");
  btn_new.appendChild(New("text Delete"));
  li_newTask.appendChild(btn_new);
  btn_new.onclick = DeleteTask;
  
  lst_incompleteTasks.appendChild(li_newTask);
}

function ToggleEditMode() {
  if (this.parentNode.classList.contains("editMode")) {
    this.parentNode.querySelector("label").innerHTML = this.parentNode.querySelector("input[type=text]").value;
    this.parentNode.querySelector("button.edit").innerHTML = "Edit";
    this.parentNode.classList.remove("editMode");
    
  } else {
    this.parentNode.querySelector("input[type=text]").value = this.parentNode.querySelector("label").innerHTML;
    this.parentNode.querySelector("button.edit").innerHTML = "Done";
    this.parentNode.classList.add("editMode");
  }
}

function ToggleComplete() {
  if (this.checked) {
    lst_completedTasks.appendChild(this.parentNode);
  } else {
    lst_incompleteTasks.appendChild(this.parentNode);
  }
}

function DeleteTask() {
  var parent = this.parentNode;
  var grandParent = parent.parentNode;
  grandParent.removeChild(parent);
}

// Returns a new element, text, input or plain html.
// Input accepts a type, Text accepts a value. 
function New (element) {
  var typeDetails = element.split(" ");
  var newElement;
  
  if (typeDetails[0] === "text") {
    if (typeDetails[1] !== undefined) {
      typeDetails.shift();
      var text = typeDetails.join(" ");
      newElement = document.createTextNode(text);
    }
  }
  else if (typeDetails[0] === "input") {
    newElement = document.createElement("input");
    if (typeDetails[1] !== undefined) {
      newElement.type = typeDetails[1];
    }
  } else {
    newElement = document.createElement(typeDetails[0]);
  }
  
  return newElement;
}


/*    Events
-----------------*/

btn_addTask.onclick = AddTaskToIncompleteTaskList;
btn_addTask.addEventListener("click", function(){console.log("Threw this in just to demonstrate the syntax.")});

var checkBoxes = document.getElementsByTagName("input");
for (i = 0 ; i < checkBoxes.length ; i++) {
  if (checkBoxes[i].type === "checkbox") {
    checkBoxes[i].onchange = ToggleComplete;
  }
}

var editButtons = document.getElementsByClassName("edit");
for (i = 0; i < editButtons.length ; i++) {
  editButtons[i].onclick = ToggleEditMode;
}

var deleteButtons = document.getElementsByClassName('delete');
for (i = 0 ; i < deleteButtons.length ; i++) {
  deleteButtons[i].onclick = DeleteTask;
}
