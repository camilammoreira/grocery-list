export const editItem = (element) => {
    let newItemName = prompt("Insert the new item's name");

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