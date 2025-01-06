import { createListItem } from "./createListItem.js";
import { verifyEmptyList } from "./verifyEmptyList.js";

const buyList = document.getElementById('buy-list');

const item = document.getElementById('input-text');

export function addItem(event) {
    event.preventDefault();

    if (item.value === "") {
        alert("Invalid item");
        return;
    }

    createListItem(item.value);
    verifyEmptyList(buyList);
    item.value = "";
}