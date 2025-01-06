const purchasedList = document.getElementById('purchased-list-title');

export function verifyPurchasedList(list) {
    if (list.querySelectorAll('li').length === 0) {
        purchasedList.style.display = 'none';
    } else {
        purchasedList.style.display = 'block';
    }
}