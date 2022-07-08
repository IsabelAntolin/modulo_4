//const { json } = require("express");

const inputTarea = document.querySelector('.input');
const btnAgregarTarea = document.querySelector('.boton-agregar')
const containerTareas = document.querySelector('#container');

let datosLocalStore;

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
    botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
    //*********************************************/
    const botonRemover = document.createElement('a')
    botonRemover.classList.add('boton-remover')
    botonRemover.innerHTML = '<i class="fa-solid fa-circle-minus"></i>'
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
      console.log(this)
      if (!inputItem.disabled) {
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        inputItem.disabled = true
        return
      }
      botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
      inputItem.disabled = false
    })

    botonRemover.addEventListener('click', function () {
      console.log(this)
      console.log(inputItem.value)
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
    //
    inputTarea.value = ''
  }
}

function saveTask(task) {
  //obtengo las Tareas
  let localTasks = localStorage.getItem('tareas') || '[]'
  localTasks = JSON.parse(localTasks)
  localTasks.push(task);
  localTasks = JSON.stringify(localTasks)
  localStorage.setItem('tareas', localTasks)
}

function ObtenerLocalStore() {
  datosLocalStore = localStorage.getItem('tareas') || '[]'
  datosLocalStore = JSON.parse(datosLocalStore)
  console.log(datosLocalStore)
  return datosLocalStore
}

function cargarListaTareas() {
  ObtenerLocalStore()
  //este metodo sirve para recorrer los elementos que se encuentran en el localStore donde crea un objeto item y a su vez llama a su metodo interno crearDiv y le agrega las tareas
  for (tar of datosLocalStore) {
    let item = new Item(tar)
  }
}


function eliminarLocalStore(input) {
  console.log(datosLocalStore)

  ObtenerLocalStore()
  let arrayP =[]
  
  //recorro y filtro el array dando nuevos valores menos el de la tarea
  for(let dato of datosLocalStore){
    if(dato != input){
      arrayP.push(dato)
    }
  }
  console.log(arrayP);  
  

//remuevo los datos de localStore
  localStorage.removeItem('tareas')
  // vuelvo a recorrer el array de datosLocalStore 
  for (tar of arrayP) {
    saveTask(tar) //agrego a LocalStore
  }
}

inputTarea.addEventListener("keyup",function(ev){
  if(ev.keyCode  === 13){
    chequearInput()
  }
})

cargarListaTareas()




