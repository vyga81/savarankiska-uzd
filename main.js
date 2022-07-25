const btn = document.querySelector('#btn');
const list = document.querySelector('#shop_list');
const none = document.querySelector('.shoplist_is-empty');
const enter = document.querySelector('#imput');
const array = [];
let iteminput = document.querySelector('input[type="text"]')

const form = document.querySelector('.form')
const itemlist = document.getElementById('shop_list')
none.innerHTML = "krepselis tuscias"
//form submit event
form.addEventListener('submit', additem);

//delete event

itemlist.addEventListener('click', removeItem)


//add item
function additem(e) {
    e.preventDefault();


    //get input value
    let newitem = document.getElementById('imput').value;
    //create new element
    let li = document.createElement('li');
    //add class
    li.className = 'shop_list';
    //add text node with input value
    li.appendChild(document.createTextNode(newitem));

    itemlist.appendChild(li);

    //create delete button element
    let deleteBtn = document.createElement('button')

    //add class to del button
    deleteBtn.className = 'deleteBtn'

    //apend text node
    deleteBtn.appendChild(document.createTextNode('Pasalinti'))
    none.innerHTML = '';

    //apend button to li
    li.appendChild(deleteBtn)

    //apend li to list
    itemlist.appendChild(li);


    array.push(itemlist)
    console.log(array)
}

//Delete items
function removeItem(e) {
    // if (e.classlist.contains('delete'))
    let li = e.target.parentElement;
    itemlist.removeChild(li)
    array.pop(itemlist)
    console.log(array)
    none.innerHTML = 'Jusu krepselis tuscias';
}