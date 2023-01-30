/** Toma la accion del click para los botones mostrar y ocultar de cada seccion**/
function tomar_click(menos,mas,seccion){
    document.getElementById(menos).addEventListener('click',function(){
        /** cuando se hace click en ocultar, se esconde la seccion que tiene la informacion */
        document.getElementById(seccion).style.display='none'
        intercambiar_boton(true,menos,mas); 
    })
    document.getElementById(mas).addEventListener('click',function(){
        /** cuando se hace click en mostrar, se pone visible la seccion que tiene la informacion */
        document.getElementById(seccion).style.display='block'
        intercambiar_boton(false,menos,mas);
    })
}
/** Intercambia que boton està visible, entre los botones mostrar y ocultar de cada seccion **/
function intercambiar_boton(estado_boton1,boton1,boton2){
    if (estado_boton1) {
        document.getElementById(boton1).style.display='none';
        document.getElementById(boton2).style.display='block'
    } else {
        document.getElementById(boton2).style.display='none';
        document.getElementById(boton1).style.display='block'  
    }    
}

tomar_click("ocultar-datos-personales","mostrar-datos-personales",'datos-personales');
tomar_click("menos-residencia","mas-residencia",'datos-residencia');
tomar_click("menos-formacion","mas-formacion",'datos-formacion');
tomar_click("menos-cursos","mas-cursos",'datos-cursos');
tomar_click("menos-experiencia","mas-experiencia",'datos-experiencia');
tomar_click("menos-otros","mas-otros",'datos-otros');