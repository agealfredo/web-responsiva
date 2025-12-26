const navToggle = document.querySelector("#navToggle");
const mobilePanel = document.querySelector("#mobilePanel");

function closeMenu(){
    navToggle.setAttribute("aria-expanded", "false");
    mobilePanel.hidden= true;
}

function openMenu(){
    navToggle.setAttribute("aria-expanded", "true");
    mobilePanel.hidden= false;
}


navToggle.addEventListener("click", ()=>{
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
});
 
document.querySelectorAll(".panel-link, .panel-cta").forEach((a)=>{
    a.addEventListener("click", closeMenu);
})


document.addEventListener("keydown", (e)=>{
    if (e.key === "Escape") closeMenu();
})