const msgEmptyList = document.getElementById('empty-list');

export function verifyEmptyList(list) {
    if (list.querySelectorAll('li').length === 0) {
        msgEmptyList.style.display = 'block';
    } else {
        msgEmptyList.style.display = 'none';
    }
}