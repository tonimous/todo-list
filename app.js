const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const feedback = document.querySelector('.feedback');
const deleteMe = document.getElementsByClassName('delete');
const search = document.querySelector('.search input');


// this function adds a list inside a ul 

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
     <span>${todo}</span>
     <i class="fas fa-trash-alt delete"></i>
    </li>
    `;
    ul.innerHTML += (html);
    addForm.reset();
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);

    if(todo.length){
        generateTemplate(todo);
        feedback.innerHTML = ''
    }else{
        feedback.innerHTML = 'Please add a todo.'
        addForm.reset();
    }
});


// remove a child from a parent element targeting a specific class value 

ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


// search the ul to find matching items 

const filterItems = (term) => {

    Array.from(ul.children)
    .filter(item => !item.textContent.toLowerCase().includes(term))
    .forEach(item => {
        item.classList.add('filtered')
    });

    Array.from(ul.children)
    .filter(item => item.textContent.toLowerCase().includes(term))
    .forEach(item => {
        item.classList.remove('filtered')
    });
};

// this way the function filters in every keyup if it matches the filterItems(term )

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterItems(term);
});
search.addEventListener('submit', e => {
    e.preventDefault();
});



