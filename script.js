

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


function displayNotification(className, message) {
    let notification = document.querySelector('#notification');
    notification.style.display = 'inline-block';
    notification.className = className;
    notification.innerHTML = message;
}



addEventListener('keydown', e => {
    if(e.key != 'Enter') return;

    let input = document.querySelector('#new-item');
    if(input != document.activeElement) return;

    addTodoItem();
})


function addTodoItem() {
    // perskaityti reiksme is input laukelio
    let input = document.querySelector('#new-item');
    let list = document.querySelector('#todo-list');

    if(!input.value) {
        displayNotification('error', 'New item cannot be empty!');
        return;
    }

    if(input.value.length > 50) {
        displayNotification('error', 'Character count cannot exceed 50 characters!')
        return;
    }

    if(list.childElementCount >= 5) {
        displayNotification('error', 'No more items can fit to this list!')
        return;
    }
        
    // sukonstruoti nauja saraso eilute <li>
    let li = '<li>' + input.value + '</li>';

    // ideti nauja eilute i sarasa
    list.innerHTML = list.innerHTML + li;
    
    // istrinti ivesties laukelio reiksme
    input.value = '';
    displayNotification('success', 'Item added!');
}

