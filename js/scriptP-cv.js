/**document.getElementById("ocultar-datos-personales").addEventListener('click',function(){
    document.getElementById('datos-personales').style.display='none'
    intercambiar_boton(true,'ocultar-datos-personales','mostrar-datos-personales');    
})
document.getElementById("mostrar-datos-personales").addEventListener('click',function(){
    document.getElementById('datos-personales').style.display='block'
    intercambiar_boton(false,'ocultar-datos-personales','mostrar-datos-personales');    
})


document.getElementById("menos-residencia").addEventListener('click',function(){
    document.getElementById('datos-residencia').style.display='none'
    intercambiar_boton(true,'menos-residencia','mas-residencia');   
})
document.getElementById("mas-residencia").addEventListener('click',function(){
    document.getElementById('datos-residencia').style.display='block'
    intercambiar_boton(false,'menos-residencia','mas-residencia');    
})


document.getElementById("menos-formacion").addEventListener('click',function(){
    document.getElementById('datos-formacion').style.display='none'
    intercambiar_boton(true,'menos-formacion','mas-formacion'); 
})
document.getElementById("mas-formacion").addEventListener('click',function(){
    document.getElementById('datos-formacion').style.display='block'
    intercambiar_boton(false,'menos-formacion','mas-formacion'); 
}) **/




function tomar_click(menos,mas,seccion){
    document.getElementById(menos).addEventListener('click',function(){
        document.getElementById(seccion).style.display='none'
        intercambiar_boton(true,menos,mas); 
    })
    document.getElementById(mas).addEventListener('click',function(){
        document.getElementById(seccion).style.display='block'
        intercambiar_boton(false,menos,mas);
    })
}

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