const formTodo = document.querySelector('.form-add-todo');


formTodo.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.add.value.trim();

    console.log(inputValue);
});