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
  row.insertCell().innerHTML = '<button><a class="dlt" onClick="onDelete(this)">Delete</a></button>';
  row.insertCell().innerHTML = '<button><a class="edt" onClick="onEdit(this)">Edit</a></button>';
};


function sortTable() {
  tasks.sort((a, b) => {
    return b.priority - a.priority;
  });
  addTaskToTable();
};



function onDelete() {
  if (confirm('Are you sure to delete this record ?')) {
      var selectdelete = document.querySelector("a.dlt");
      selectdelete = selectdelete.parentElement.parentElement.parentElement.remove(0);
  }
}
function onEdit() {
  var edit = document.querySelector("a.edt");
  let input = document.createElement('input');
  input.type = 'text';
  input.value = 

  edit.replaceWith(input);
  
}


