import { verifyEmptyList } from "./verifyEmptyList.js";
import { verifyPurchasedList } from "./verifyPurchasedList.js";

const buyList = document.getElementById('buy-list');
const purchasedList = document.getElementById('purchased-list');

const deleteItem = (element) => {
    let confirmation = confirm('Are you sure you want to delete this item?');

    if (confirmation) {
        element.remove();

        verifyEmptyList(buyList);
        verifyPurchasedList(purchasedList);
    }
}

export { deleteItem };