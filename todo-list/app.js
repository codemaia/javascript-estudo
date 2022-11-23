// add to-do - ok
// remove to-do

const formTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const formSearch = document.querySelector('.form-search input');


formTodo.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.add.value.trim();

    if (inputValue) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `
        // formTodo.add.value = ''
        event.target.reset();
    }
    
});


todosContainer.addEventListener('click', event => {
    
    const clickedElement = event.target;

    if (Array.from(clickedElement.classList).includes('delete')) {
        
        clickedElement.parentElement.remove();
    }
    
});


formSearch.addEventListener('input', event => {
    
    const inputValue = event.target.value;
    
    const toDoText = todosContainer.textContent;
    console.log(toDoText);

});
