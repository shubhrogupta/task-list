const form = document.getElementById('form-id');
const taskList = document.getElementById ('list-group');
const clearBtn = document.getElementById('clearBtn');
const taskInput = document.getElementById('textInput');
const filter = document.getElementById('filter');

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks)
}

function addTask(e){
    if(taskInput.value===''){
        alert('add a task biyotchi');
    }

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('button');
    link.className = 'close'
    link.innerHTML = '<span aria-hidden="true">×</span>'
    

    
    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = '';


    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('close')){    
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks(){
    taskList.innerHTML = '';
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.list-group-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }