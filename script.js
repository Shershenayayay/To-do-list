const input = document.querySelector('#todo-input');

function addTodo() {
  const inputData = input.value.trim();
  if (inputData === "") return; // Не добавлять пустые задачи
  input.value = "";

  const todo_el = document.createElement('div');
  todo_el.classList.add('todo-item');

  const todo_content_el = document.createElement('div');
  todo_el.appendChild(todo_content_el);

  const todo_input_el = document.createElement('input');
  todo_input_el.classList.add('text');
  todo_input_el.type = 'text';
  todo_input_el.value = inputData;
  todo_input_el.setAttribute('readonly', 'readonly');

  todo_content_el.appendChild(todo_input_el);

  const todo_actions_el = document.createElement('div');
  todo_actions_el.classList.add('action-items');

  const todo_done_el = document.createElement('i');
  todo_done_el.classList.add('fa-solid', 'fa-check');

  const todo_edit_el = document.createElement('i');
  todo_edit_el.classList.add('fa-solid', 'fa-pen-to-square', 'edit');

  const todo_delete_el = document.createElement('i');
  todo_delete_el.classList.add('fa-solid', 'fa-trash');

  todo_actions_el.appendChild(todo_done_el);
  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);
  console.log(todo_el)
  document.querySelector('.todo-lists').appendChild(todo_el);

  todo_done_el.addEventListener('click', () => {
    todo_input_el.classList.toggle('done');
  });

  todo_edit_el.addEventListener('click', () => {
    if (todo_edit_el.classList.contains("edit")) {
      // Переводим в режим редактирования
      todo_edit_el.classList.remove("edit");
      todo_edit_el.classList.remove("fa-pen-to-square");
      todo_edit_el.classList.add("fa-x");
      todo_edit_el.classList.add("save");
      todo_input_el.removeAttribute("readonly");
      todo_input_el.focus();
    } 
    else {
      todo_edit_el.classList.remove("save");
      todo_edit_el.classList.remove("fa-x");
      todos_edit_btns.forEach(btn => {
        btn.classList.remove("save");
        btn.classList.remove("fa-x");
        btn.classList.add("fa-pen-to-square");
        btn.classList.add("edit");
      });
      todos_input.forEach(input => input.setAttribute("readonly", "readonly"));
    }
  });

  todo_delete_el.addEventListener('click', () => {
    document.querySelector('.todo-lists').removeChild(todo_el);
  });
}

document.querySelector('#submit').addEventListener('click', addTodo);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    addTodo();
  }
});