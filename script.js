

function applyStyle() {
    let element = document.querySelector('#title');
    element.style.color = 'red';
    element.style.background = 'rgb(216, 230, 219)';
    element.style.border = '2px dashed';
    element.style.margin = '0 5em';
}


function removeStyle() {
    let element = document.querySelector('#title');
    element.style.color = 'black';
    element.style.background = 'transparent';
    element.style.border = 'none';
    element.style.margin = '0';
}


function addTodoItem() {
    // perskaityti reiksme is input laukelio
    let input = document.querySelector('#new-item');

    // sukonstruoti nauja saraso eilute <li>
    let li = '<li>' + input.value + '</li>';

    // ideti nauja eilute i sarasa
    let list = document.querySelector('#todo-list');
    list.innerHTML = list.innerHTML + li;

    // istrinti ivesties laukelio reiksme
    input.value = '';
}

