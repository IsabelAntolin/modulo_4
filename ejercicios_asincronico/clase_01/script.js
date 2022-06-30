let inputTarea = document.querySelector('.input');
let btnAgregarTarea = document.querySelector('.boton-agregar')
let btnEliminarTarea = document.querySelector('.boton-remover')
let containerTareas = document.querySelector('#container');

let mensajeTarea;


function AgregarMensaje(){
    mensajeTarea= inputTarea.value; 
    mensaje = `<div class="item">
                <a href="#"><img src="img/flor.png" alt=""></a>
                <input type="text" class="item-input" disabled value="${mensajeTarea}">
                <a class="boton-editar"><i class="fa-solid fa-lock"></i></a>
                <a class="boton-remover"><i class="fa-solid fa-circle-minus"></i></a>
  </div> `
    containerTareas.innerHTML =  containerTareas.innerHTML + mensaje
    mensajeTarea= inputTarea.value; 
    console.log(mensajeTarea)   
}

btnAgregarTarea.addEventListener('click',function(){
    if(!(((inputTarea.value).trim()) == '')){
        AgregarMensaje()
        inputTarea.value=''
    }
   
})
// btnEliminarTarea.addEventListener('click',function(){
//     AgregarMensaje()
// })

