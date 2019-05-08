   //librerias
   const fs = require('fs');
   const path = require('path');
   const filePath = process.argv[2];
   const readPath = fs.readFile(filePath, 'utf8');


   //const saludar = (path) =>{
   //   return console.log("Hola mundo");
   //};

   //Función que valida si existe una ruta de Archivo 
   const pathInserted = (pathFile) => {
     if (pathFile == undefined) {
       return false;
     } else {
       return true;
     }
   };


   //Función para extraer links de archivo MD  
   const extractorInf = (extract) => {
     const regularExpression = /\[(.*?)\]\((.*?)\)/g; 
     let haveArray = [];
     //El método match() con búsqueda global (modificador "g") busca una o todas las coincidencias
     // de una expresión regular sobre un String, devolviéndolas en un array
     while (match = regularExpression.exec(extract)) {
       //método exec(),se ejecuta sobre la expresión regular, siendo su argumento el String. Con una búsqueda global 
       //y con cada ejecución modificará las propiedades 
       arrayContent = {
         file: match[1],
         href: match[2]
         //text: match[3] indefinido // texto(<a>)
         
       };
       haveArray.push(arrayContent);
     };
     return haveArray;
   };

   //Nos muestra en la terminal array de links
   console.log(extractorInf(readPath));
   console.log('found links:' + extractorInf(readPath).length);

   module.exports = {
     'pathInserted': pathInserted,
     'extractorInf': extractorInf,
   };
