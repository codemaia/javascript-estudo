// add to-do - ok
// remove to-do - ok
// filter to-do - ok

const formTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const inputSearchTodo = document.querySelector('.form-search input');




//add to-do
formTodo.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.add.value.trim();

    if (inputValue) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
            </li>
            `   
        // formTodo.add.value = ''
        event.target.reset();
    }
    
});



//remove to-do

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target;

    if (clickedElement.dataset.trash) { //como o conteudo do DATA é igual tanto na LI quando no I podemos usar target da lixeira e chamar o querySelector para pegar o LI
        document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`).remove();
    }
    


});



// console.log(dataTodosContainer)
// const lis_array = Array.from(dataTodosContainer);


// todosContainer.addEventListener('click', event => {
    
//     const clickedElement = event.target;

//     if (Array.from(clickedElement.classList).includes('delete')) {
        
//         clickedElement.parentElement.remove();
//     }
    
// });

/** remove to-do
 *  search all <li> in <ul> (use children)
 *  filter the <li> that meet the value to input
 *  add the class hidden
 *  
 */


//filter to-do
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


