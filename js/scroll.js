
const header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("abajo",this.window.scrollY > 0);
    valor = this.window.scrollY > 0;
    console.log(valor);
});