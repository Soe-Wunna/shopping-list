
const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];


let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    const spanTag = document.createElement("span");
    spanTag.id = productId;
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("far","fa-trash-alt");
    parentDiv.addEventListener("click", ()=>{
        const classExit = parentDiv.classList.contains("purchased");
    if (classExit){
        parentDiv.classList.remove("purchased");
    } else {
        parentDiv.classList.add("purchased");
    }
    })
    trashIcon.addEventListener("click",()=>{
        productContainer.remove();
    })
    const product = spanTag.id + "." + " " + inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon);
    shoppingListTag.append(productContainer);
    inputTag.value = "";
    productId += 1;
}
inputTag.addEventListener("change" , handleChange)
