import { dateText } from "./dateText.js";
import { deleteItem } from "./deleteItem.js";
import { verifyPurchasedList } from "./verifyPurchasedList.js";

let counter = 0;
const purchasedList = document.getElementById('purchased-list');
const buyList = document.getElementById('buy-list');


export function createListItem(item) {
    const listItem = document.createElement('li');
    const containerItem = document.createElement('div');
    containerItem.classList.add('item');

    const containerItemName = document.createElement('div');

    // Checkbox
    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('container-checkbox');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-input');
    checkboxInput.id = 'checkbox-' + counter++;

    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('custom-checkbox');

    // Label
    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id); // Outra forma de add atributos

    checkboxLabel.addEventListener('click', (event) => {
        const checkboxInput = event.currentTarget.querySelector('.checkbox-input');
        const customCheckbox = event.currentTarget.querySelector('.custom-checkbox');
        const itemTitle = event.currentTarget.closest('li').querySelector('#item-title');
        if (checkboxInput.checked) {
            customCheckbox.classList.add('checked');
            itemTitle.style.textDecoration = 'line-through';
            purchasedList.appendChild(listItem);
        } else {
            customCheckbox.classList.remove('checked');
            itemTitle.style.textDecoration = 'none';
            buyList.appendChild(listItem);

        }

        verifyPurchasedList(purchasedList);
    })

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customCheckbox);

    containerCheckbox.appendChild(checkboxLabel);
    containerItemName.appendChild(containerCheckbox);

    // Item name
    const itemName = document.createElement('span');
    itemName.id = 'item-title';
    itemName.classList.add('item-name');
    itemName.innerText = item;
    checkboxLabel.appendChild(itemName);

    // Del button
    const containerButton = document.createElement('div');
    const buttonDel = document.createElement('button');
    buttonDel.classList.add('item-button');

    const imgDel = document.createElement('img');
    imgDel.src = 'assets/delete.svg';
    imgDel.alt = 'Delete';

    buttonDel.addEventListener('click', function() {
        deleteItem(listItem);
    });

    buttonDel.appendChild(imgDel);
    containerButton.appendChild(buttonDel);

    // Edit button
    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('item-button');

    const imgEdit = document.createElement('img');
    imgEdit.src = 'assets/edit.svg';
    imgEdit.alt = 'Edit';

    buttonEdit.appendChild(imgEdit);
    containerButton.appendChild(buttonEdit);

    // Date Text
    const containerItemDate = document.createElement('div');
    const itemDate = document.createElement('span');
    itemDate.classList.add('item-date');
    
    dateText(itemDate);
    
    containerItemDate.appendChild(itemDate);


    containerItem.appendChild(containerItemName);
    containerItem.appendChild(containerButton);
    buyList.appendChild(listItem);
    listItem.appendChild(containerItem);
    listItem.appendChild(containerItemDate);

    return listItem;
}