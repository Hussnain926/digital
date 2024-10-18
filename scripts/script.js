

var menu = document.querySelector(".ri-menu-line");
var wrapper = document.querySelector(".nav");

const toggleNavBar = () => {
    wrapper.classList.toggle("active")
}
menu.addEventListener("click",()=>toggleNavBar());














// var menu = document.querySelector(".ri-menu-line");
//         var wrapper = document.querySelector("#links");
//         var navLinks = document.querySelectorAll(".nav-link");

//         const toggleNavBar = () => {
//             wrapper.classList.toggle("active");
//         }

//         menu.addEventListener("click", () => {
//             toggleNavBar();
//         });

//         // Add click event listeners to each nav link
//         navLinks.forEach(link => {
//             link.addEventListener("click", () => {
//                 // Remove active class from all links
//                 navLinks.forEach(link => link.classList.remove("active"));
//                 // Add active class to the clicked link
//                 link.classList.add("active");
//                 // Close the nav bar (if needed)
//                 wrapper.classList.remove("active");
//             });
//         });