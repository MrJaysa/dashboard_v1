const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

btn.addEventListener("click", ()=>{
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
})
