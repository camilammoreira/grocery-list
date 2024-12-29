import { verifyEmptyList } from "./verifyEmptyList";

const deleteItem = (element) => {
    let confirmation = confirm('Are you sure you want to delete this item?');

    if (confirmation) {
        element.remove();

        verifyEmptyList();
        ver
    }
}