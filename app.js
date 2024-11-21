const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    const listItem = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('d-flex', 'gap-1');

    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="bi bi-check-lg"></i>';
    doneButton.classList.add('btn', 'btn-success', 'btn-sm');
    doneButton.addEventListener('click', function () {
        taskContent.classList.toggle('done');
    });

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';
    removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
    removeButton.addEventListener('click', function () {
        listItem.remove();
    });

    buttonsContainer.appendChild(doneButton);
    buttonsContainer.appendChild(removeButton);
    listItem.appendChild(taskContent);
    listItem.appendChild(buttonsContainer);
    todoList.appendChild(listItem);

    todoInput.value = '';
}