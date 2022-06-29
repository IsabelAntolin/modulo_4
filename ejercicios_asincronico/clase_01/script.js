let containerTareas = document.querySelector('#container');
let inputTarea = document.querySelector('.input');
let btnAgregarTarea = document.querySelector('.boton-agregar')
let btnEliminarTarea = document.querySelector('.boton-remover')

let mensajeTarea;


function AgregarMensaje(){
    mensajeTarea= inputTarea.value; 
    mensaje = `<div class="item">
                <a href="#"><img src="img/flor.png" alt=""></a>
                <input type="text" class="item-input" disabled value="${mensajeTarea}">
                <a class="boton-editar"><img src="img/iconCandado.png" alt=""></a>
                <a class="boton-remover"><img src="img/iconRemove.png" alt=""></a>
  </div> `
    containerTareas.innerHTML =  containerTareas.innerHTML + mensaje
    mensajeTarea= inputTarea.value; 
    console.log(mensajeTarea)   
}

btnAgregarTarea.addEventListener('click',function(){
    AgregarMensaje()
})
// btnEliminarTarea.addEventListener('click',function(){
//     AgregarMensaje()
// })

