export const editItem = (element) => {
    const listItem = element.closest('li').querySelector('.item-name');
    const itemName = listItem.textContent.trim();
    let newItemName = prompt("Insert the new item's name", itemName);

    if (newItemName !== null && newItemName.trim() !== ""){
        const itemUpdatedText = element.querySelector("#item-title");
        itemUpdatedText.textContent = newItemName;

        const purchased = element.querySelector(".checkbox-input").checked;

        if (purchased) {
            element.querySelector(".checkbox-input").checked = true;
            element.querySelector(".custom-checkbox").classList.add("checked");
            itemUpdatedText.style.textDecoration = "line-through";
        }
    }
}