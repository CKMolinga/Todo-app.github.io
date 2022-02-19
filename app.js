const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="todo-item mb-1 py-2 px-4">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
`;

    list.innerHTML += html;

}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }

});

// Delete todos 
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    // remove filtered class
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));

};

// Keyup event 
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
})