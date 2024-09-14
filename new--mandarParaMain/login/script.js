function changeVisibility(elem) {
    const className = "isVisible";
    if(elem.parentNode.classList.contains(className)) {
        elem.parentNode.classList.remove(className);
        elem.parentNode.children[0].setAttribute("type", "password");
    } else {
        elem.parentNode.classList.add(className);
        elem.parentNode.children[0].setAttribute("type", "text");
    }
}

const showOrHideButton = document.querySelector("#show-or-hide-img");
console.log(showOrHideButton)

showOrHideButton.addEventListener("click", (e) => {
    changeVisibility(e.target)
});