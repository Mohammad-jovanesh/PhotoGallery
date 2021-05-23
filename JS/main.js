const BurgerBtn = document.querySelector(".Btn_burger")
const NavMenu = document.querySelector(".nav_list")
const LinksOfNavList = document.querySelectorAll(".nav_link")
BurgerBtn.addEventListener("click", () => {
    NavMenu.classList.toggle("toggle")
})
LinksOfNavList.forEach(elm => {
    elm.addEventListener("click", () => {
        NavMenu.classList.toggle("toggle")
    })
})