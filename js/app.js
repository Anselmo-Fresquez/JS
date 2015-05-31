/*     Vars
-----------------*/

var btn_addTask             = document.getElementsByTagName("button")[0];
var txt_newTaskDescription  = document.getElementById("new-task");
var lst_incompleteTasks     = document.getElementById("incomplete-tasks");
var lst_completedTasks      = document.getElementById("completed-tasks");

/*   Functions
-----------------*/

function AddTaskToIncompleteTaskList() {
  var li_newTask = New("li");
  
  li_newTask.appendChild(New("input checkbox"));
  
  var lbl_new = New("label");  
  lbl_new.appendChild(New("text " + txt_newTaskDescription.value));
  txt_newTaskDescription.value = "";
  li_newTask.appendChild(lbl_new);
  
  li_newTask.appendChild(New("input text"));
  
  var btn_new = New("button");
  btn_new.class = "edit";
  btn_new.appendChild(New("text Edit"));
  li_newTask.appendChild(btn_new);
  
  btn_new = New("button");
  btn_new.class = "delete";
  btn_new.appendChild(New("text Delete"));
  li_newTask.appendChild(btn_new);
  
  lst_incompleteTasks.appendChild(li_newTask);
}


/*    Events
-----------------*/

btn_addTask.onclick = AddTaskToIncompleteTaskList;







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

