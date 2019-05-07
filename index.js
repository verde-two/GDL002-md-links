
//librerias
const fs = require('fs');
const path = require('path');

//const saludar = (path) =>{
//   return console.log("Hola mundo");
//};

/**Función que valida si existe una ruta de Archivo */
const pathInserted = (pathFile) => {
   if(pathFile == undefined){
      
      return false;
   }
   else{
      return true;
   }
};

module.exports = {
   'pathInserted': pathInserted,
   
};


