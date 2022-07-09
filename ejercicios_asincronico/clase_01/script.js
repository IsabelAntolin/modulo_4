const inputTarea = document.querySelector('.input'); //input principal
const btnAgregarTarea = document.querySelector('.boton-agregar')
const containerTareas = document.querySelector('#container');
let datosLocalStore;

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }
  crearDiv(nuevaTarea) {
    const inputItem = document.createElement('input')
    inputItem.type = 'text'
    inputItem.classList.add('item-input');
    inputItem.disabled = true;
    inputItem.value = nuevaTarea
    //*********************************************/
    const divItem = document.createElement('div')
    divItem.classList.add('item');
    //*********************************************/
    const botonEditar = document.createElement('button')
    botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
    botonEditar.classList.add('boton-editar')
    //*********************************************/
    const botonRemover = document.createElement('button')
    botonRemover.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    botonRemover.classList.add('boton-remover')
    //*********************************************/
    const logoFlor = document.createElement('a');
    logoFlor.innerHTML = '<img src="img/flor.png" alt="">'
    //*********************************************/
    divItem.appendChild(logoFlor)
    divItem.appendChild(inputItem)
    divItem.appendChild(botonEditar)
    divItem.appendChild(botonRemover)
    containerTareas.appendChild(divItem)

    botonEditar.addEventListener('click', function () {
      // primer click desbloquear - segundo click bloquear     
      if (!inputItem.disabled) {
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        inputItem.disabled = true
        editarLocalStore()
      } else {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
        inputItem.disabled = false
      }
    })
    botonRemover.addEventListener('click', function () {
      divItem.remove()
      eliminarLocalStore(inputItem.value)
    })
  }
}

btnAgregarTarea.addEventListener('click', function () {
  chequearInput()
})

function chequearInput() {
  if (!(((inputTarea.value).trim()) == '')) {
    let item = new Item(inputTarea.value)
    //Agregar a localStorage
    saveTask(inputTarea.value)
    inputTarea.value = ''
  }
}
/************bonus********** */
function saveTask(task) {
  ObtenerLocalStore() //obtiene los datos del localstore y los devuelve en un array
  datosLocalStore.push(task); //agrego la tarea al array que llega como resultado de la funcion obtener
  datosLocalStore = JSON.stringify(datosLocalStore) //transformo a string
  localStorage.setItem('tareas', datosLocalStore) //agrego en localstore
}
function ObtenerLocalStore() {
  datosLocalStore = localStorage.getItem('tareas') || '[]'
  datosLocalStore = JSON.parse(datosLocalStore)
  return datosLocalStore
}

(function cargarListaTareas() {
  ObtenerLocalStore()
  for (tar of datosLocalStore) {
    let item = new Item(tar)
  }
})()

function eliminarLocalStore(input) {
  ObtenerLocalStore()
  datosLocalStore = datosLocalStore.filter(t => t != input)
  datosLocalStore = JSON.stringify(datosLocalStore)
  localStorage.setItem('tareas', datosLocalStore)
}
function editarLocalStore() {
  localStorage.removeItem('tareas')
  for (valor of document.querySelectorAll('.item-input')) {
    saveTask(valor.value)
  }
}

inputTarea.addEventListener("keyup", function (ev) {
  if (ev.keyCode === 13) {
    chequearInput()
  }
})






