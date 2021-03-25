const enterBtn = document.getElementById('enter');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');

input.focus(); // focus cursor on text input box

// create item in list
function createListElement() {
    let li = document.createElement('li'); // create list item element
    li.appendChild(document.createTextNode(input.value)); // append input value to list item
    ul.appendChild(li) // add list item to unordered list
    input.value = ''; // reset input value to nothing

    // delete button on list item
    let delBtn = document.createElement('button'); // create delete button element
    delBtn.appendChild(document.createTextNode('X')); // append value to button ('X')
    li.appendChild(delBtn); // append delete button to list item 
    delBtn.addEventListener('click', deleteListItem); // event listener, if button clicked calls delete function & deletes

    // delete list item
    function deleteListItem() {
        li.style.display = 'none'; // change css style of list item to not display
    }
}

// add item to list if input value is greater than 0
function addListItem() {
    input.focus();
    if (input.value.length > 0) {
        createListElement();
    } 
}

enterBtn.addEventListener('click', addListItem);

// THE RANDOMNESS:
const randBtn = document.getElementById('random');

// return random item in list if not marked as no display (deleted)
function getRandomItem() {
    // const allListItems = ;
    let listItems = getNotDeletedItems(document.getElementsByTagName('li'));
    if (listItems.length > 0) {
        let randInt = Math.floor(Math.random() * listItems.length)
        randItem = listItems[randInt].innerText.slice(0, -1);
        return alert(`NEXT UP: ${randItem}`)
    } else {
        return alert("You must add more items to your list.")
    }
    
}

// sort out deleted items from list
function getNotDeletedItems(items) {
    let notDeleted = [];
    for (i = 0; i < items.length; i++) {
        if (items[i].style.display !== "none") {
            notDeleted.push(items[i])
        }
    }
    return notDeleted;
}

randBtn.addEventListener('click', getRandomItem);



// ??? clear list once random item is chosen?