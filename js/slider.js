

(function(){
    const sliders = [...document.querySelectorAll(".estudios_body")]; //Los corchetes y los 3 puntos es para convertirlo en un array en vez de nodos
    const buttonNext = document.getElementById("next"); //obtenemos los iconos de las flechas
    const buttonBefore = document.getElementById("before");
    let value;


    buttonNext.addEventListener("click", ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (change)=>{
        const currentElement = document.querySelector(".estudios_body--show").dataset.id; //Obtener el elemento actual en el que estamos, esto a traves del data id
        value = Number(currentElement); //El valor de currentElement lo convertimos a entero, y le pasamos el valor a value
        value += change; //a value se le sume el parametro change, esto lo que hara es irlo sumando o restando

        // console.log(value);
        //value es el valor de los data id

        sliders[Number(currentElement)-1].classList.remove("estudios_body--show"); //obtnemos el elemento actual y removemos la clase conoce_body--show
        
        //En la condicion decimos que si es cero, queremos regresar al ultimo valor de los sliders, y si es el ultimo y avanzamos que regrese al primero
        //si el valor es igual al total de elementos +1, significa que estamos rebazando y si esto pasa, lo que hacemos es reasginar un valor para value, que si value es igual a 0, significa que estaba en la posicion 1, pero en el momento en que es 0 y se resta -1, entonces ira al ultimo slider, y viceversa, si es el ultimo y se le suma, entonces regresara al primer slider
        console.log(sliders.length);
        if (value === sliders.length+1 || value === 0) { 
            value = value === 0 ? sliders.length : 1; //ahora queremos que value cambie de valor, que si value es igual a 0 entonces significa que quiero que su valor cambie y ahora tenga el valor de los elementos existentes, pero que si es diferente a 0 significa que estamos en el ultimo valor, entonces queremos que valla al primer elemento
        }

        //ahora vamos a obtener al elemento que queremos cambiar que es value, pero ahora si contamos desde el cero, ponemos un -1, luego tomamos sus clases con classlist, y agregamos la clase con add, y que sea la clase conoce_body--show
        sliders[value-1].classList.add("estudios_body--show");

    }


})();