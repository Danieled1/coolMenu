const menu = document.getElementById("menu");
// Creating indexes for the menu items
Array.from(document.getElementsByClassName("menu-item")) .forEach((item,index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
});