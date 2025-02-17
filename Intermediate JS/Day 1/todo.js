const addTask = document.getElementById('addTask');
const input = document.getElementById('input');
const list = document.getElementById('list');

addTask.addEventListener('click',() => {
    const value = input.value;
    const li = document.createElement('li');
    li.innerText = value;

    const delBtn = document.createElement('button')
    delBtn.innerHTML('X')
    li.appendChild(delBtn)

    list.appendChild(li); // linking JS to HTMl
    input.value = '';

    delBtn.addEventListener('click',() =>{
        li.remove
    })
    const reset = document.createElement('button')
    reset.innerHTML('Reset')
    reset.addEventListener('click',() => {
        li.remove
    })
});