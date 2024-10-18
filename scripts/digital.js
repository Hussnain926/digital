
var menu = document.querySelector(".ri-menu-line");
var wrapper = document.querySelector(".nav");

const toggleNavBar = () => {
    wrapper.classList.toggle("active")
}
menu.addEventListener("click",()=>toggleNavBar());



