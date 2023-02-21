(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.ul');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('ul--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('ul--show');
    });

})();