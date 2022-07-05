const inputTarea = document.querySelector('.input');
const btnAgregarTarea = document.querySelector('.boton-agregar')
const containerTareas = document.querySelector('#container');

const btnEliminarTarea = document.querySelector('.boton-remover')

let mensajeTarea;

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }
  crearDiv(nuevaTarea) {
    const inputItem = document.createElement('input')
    inputItem.classList.add('item-input');
    inputItem.disabled = true;
    inputItem.value = nuevaTarea
 //*********************************************/
    const divItem = document.createElement('div')
    divItem.classList.add('item');
    
 //*********************************************/
    const botonEditar = document.createElement('a')
    botonEditar.classList.add('boton-editar')
    botonEditar.innerHTML ='<i class="fa-solid fa-lock"></i>'
  //*********************************************/
  const botonRemover = document.createElement('a')
  botonRemover.classList.add('boton-remover')
  botonRemover.innerHTML ='<i class="fa-solid fa-circle-minus"></i>'
//*********************************************/
     const logoFlor = document.createElement('a');
     logoFlor.innerHTML ='<img src="img/flor.png" alt="">'
//*********************************************/
  divItem.appendChild(logoFlor)
  divItem.appendChild(inputItem)
  divItem.appendChild(botonEditar)
  divItem.appendChild(botonRemover)
  containerTareas.appendChild(divItem)
  }
}

btnAgregarTarea.addEventListener('click', function () {
  if (!(((inputTarea.value).trim()) == '')) {
    let item = new Item(inputTarea.value)
  }

})
// btnEliminarTarea.addEventListener('click',function(){
//     AgregarMensaje()
// })

