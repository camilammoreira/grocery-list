import { createListItem } from "./createListItem.js";
import { dateText } from "./dateText.js";
import { verifyEmptyList } from "./verifyEmptyList.js";

const buyList = document.getElementById('buy-list');

const item = document.getElementById('input-text');

export function addItem(event) {
    event.preventDefault();

    const listItem = createListItem(item.value);
    verifyEmptyList(buyList);
    
}