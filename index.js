   //#!/usr/bin/nodejs

   //librerias
   const fs = require('fs');
   const path = require('path');
   const filePath = process.argv[2];
   // readFileSync() corre en node // readFile() corre test?
   const readPath = fs.readFileSync(filePath, 'utf8');
   const fetch = require('node-fetch');
   const haveArray = [];


   //  const validate = (path) =>{
   //     return console.log("Hola mundo");
   //  };
   // validando si es un archivo
   //fs.readFile('./README.md', (err, data) => {
   //  if (err) throw err;
   //  console.log(data, 'archivo');
   //});
   //validando si es in directorio
   /*fs.readFile('./GDL002-md-links/', (err, data) => {
     if (err) throw err;
     
     console.log(data,'directorios' );
       // => [Error: EISDIR: illegal operation on a directory, read <directory>]
   });
   */
   //Función que valida si existe una ruta de Archivo 
   const pathInserted = (pathFile) => {
     if (pathFile == undefined) {
       return console.log('false');
     } else {
       return console.log('true');
     }
   };

   //Funcion que comprueba el status 
   const checkStatus = (data) => {
     console.log('holi', data);
     haveArray.forEach((link) => {
       console.log('primero', link);
       fetch(link.href).then((response) => {
          if (response.status == 200) {
            console.log('ok' + link.href);
          } else { 
            console.log('fail' + link);
          }
        })
        .catch((error) => {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
        });

     });
      
   };


   //Función para extraer links de archivo MD  
   const extractorInf = (extract) => {
     const regularExpression = /\[(.*?)\]\((.*?)\)/g;

     //El método match() con búsqueda global (modificador "g") busca una o todas las coincidencias
     // de una expresión regular sobre un String, devolviéndolas en un array
     while (match = regularExpression.exec(extract)) {
       //método exec(),se ejecuta sobre la expresión regular, siendo su argumento el String. Con una búsqueda global 
       //y con cada ejecución modificará las propiedades 
       arrayContent = {
         text: match[1],
         href: match[2]
         //file: match[3] indefinido // texto(<a>)

       };
       haveArray.push(arrayContent);
       checkStatus(arrayContent);
     };

     return arrayContent;
   };



   //Nos muestra en la terminal array de links
   console.log(extractorInf(readPath))
   console.log('found links:' + extractorInf(readPath));

   module.exports = {
     //   validate,
     pathInserted,
     extractorInf,
     checkStatus,
   };
