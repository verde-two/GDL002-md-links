
//};librerias

const saludar = (path) =>{
   return console.log("Hola mundo");
};

module.exports = {
   saludar
}

const os = require ('os');
//const fs = require ('fs');

let cpu = os.cpus();
let sistema = os.plataform();
let usuario = os.hostname();

console.log(cpu);
console.log(sistema)
console.log(usuario);

//fs.appendFile('mitocode.txt','Informacion del cpu: ' + cpu,function (error) {
//    if(error){
//    console.log('Error al crear archivo');
//    }
//})

