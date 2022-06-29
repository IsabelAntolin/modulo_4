let names = ['IsabelAntolin', 'jmorales', 'ccastro', 'doviedo'];

function getUsers(names) {  
  let usuariosGit = [];

  for (let name of names) {
    //llamar a la api
    fetch(`https://api.github.com/users/${name}`)
    //desempaquetar
    .then(datos => datos.json())
    .then(varUsuario => usuariosGit.push(varUsuario))
  }
  return usuariosGit;
}
console.log('usuarios:',getUsers(names))