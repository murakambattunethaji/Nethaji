const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.appendChild(document.createTextNode(task));

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    return li;
}

function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue !== '') {
        const taskElement = createTaskElement(taskValue);
        taskList.appendChild(taskElement);
        taskInput.value = ''; 
    }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
