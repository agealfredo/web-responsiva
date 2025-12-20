const navToggle = document.querySelector("#navToggle");
const movilePanel = document.querySelector("#movilePanel");

function closeMenu(){
    navToggle.setAttribute("aria-expanded", "false");
    movilePanel.hidden= true;
}

function openMenu(){
    navToggle.setAttribute("aria-expanded", "true");
    movilePanel.hidden= false;
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