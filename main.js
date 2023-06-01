var tasks = [];

const addTask = function () {
  const TaskName = document.getElementById("taskName").value;
  const priority = document.getElementById("priority").value;
  
  const task = { name: TaskName, priority: priority };

  if (!validation(task)) { return; }

  tasks.push(task);

  addTaskToTable(task);
 
};

function validation(task) {
  if (task.name.trim().length > 50 || parseInt(task.priority.trim()) < 1) {
    alert("Please enter a valid data");
    return false;
  } else { return true; }
}

const addTaskToTable = function (task) {
  let table = document.getElementById("task-list");
  let row = table.insertRow(table.rows.length);
  row.insertCell().innerHTML = table.rows.length;
  row.insertCell().innerHTML = task.name;
  row.insertCell().innerHTML = task.priority;
  row.insertCell().innerHTML = `<button class="btn-edit" data-id="" onclick="editrow(this)">edit</button>`;
  row.insertCell().innerHTML = `<button class="btn-delete" ="" onclick="deleteRow(this)">Delete</button>`;
};


function deleteRow(){
  let forDelete = this.parentElement
  tasks.removeChild(forDelete);
};



function editrow() {
  let forEdit = this.parentElement;
  let input = document.createElement('input');
  input.type = 'text';
  input.value = 

  forEdit.replaceWith(input);

  editrow.textContent = 'save';
}