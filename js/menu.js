(function(){
    const openButton = document.querySelector(".nav_img");
    const menu = document.querySelector(".ul");
    const closeMenu = document.querySelector(".nav_close");
    const links = document.querySelectorAll(".links");
    // const navMenu = document.querySelector(".nav--menu");

    openButton.addEventListener("click", ()=>{
        menu.classList.add("ul--show");
    });

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("ul--show");
    });

    window.addEventListener("click", e => {
        if (menu.classList.contains('ul--show') && e.target != menu && e.target !=  openButton && e.target .closest('.links') == null) {
            menu.classList.toggle("ul--show");
        }
    });

})();