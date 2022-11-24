// add to-do - ok
// remove to-do - ok
// filter to-do - ok

const formTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const inputSearchTodo = document.querySelector('.form-search input');


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

/** remove to-do
 *  search all <li> in <ul> (use children)
 *  filter the <li> that meet the value to input
 *  add the class hidden
 *  
 */

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim();
    
    Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('d-flex');
        todo.classList.add('hidden');
    });
    Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden');
        todo.classList.add('d-flex');
    });

});


