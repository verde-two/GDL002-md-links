module.exports.saludar = () => {
   console.log('Hola Mundo');
  
};

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

