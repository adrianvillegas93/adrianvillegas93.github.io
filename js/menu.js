(function(){
    const openButton = document.querySelector(".nav_img");
    const menu = document.querySelector(".ul");
    const closeMenu = document.querySelector(".nav_close");
    // const navMenu = document.querySelector(".nav--menu");

    openButton.addEventListener("click", ()=>{
        menu.classList.add("ul--show");
    });

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("ul--show");
    });

    window.addEventListener("click", e => {
        if (menu.classList.contains('ul--show') && e.target != menu && e.target !=  openButton) {
            menu.classList.toggle("ul--show");
        }
    });

})();