let conexion= require('../config/conexion');
const discos = require('../crud/discos');
let juego= require("../crud/discos");
var deletear= require("fs");
let { Console } = require('console');



module.exports={

index:function(req, res){
   juego.obtener(conexion,function(err,datos){
    console.log(datos);
    res.render('juegos/index', { title: 'APLICACIÓN CON NODE ', juegos:datos }); 
   });
    
},

crear:function (req,res) {
   res.render('juegos/crear'); 

},

guardar:function(req,res){
console.log(req.body);
console.log(req.file.filename);

juego.insertar(conexion,req.body,req.file,function(err){
    res.redirect('/juegos');
    
  });
},

eliminar:function (req,res) {
   console.log("Recepción de Datos");
   console.log(req.params.id);

   discos.retornaID(conexion,req.params.id,function (err,registros) {

      var nameimage="public/images/"+(registros[0].imagen);
      
      if(deletear.existsSync(nameimage)){
         deletear.unlinkSync(nameimage);


      }
      juego.borrar(conexion,req.params.id,function (err) {
          res.redirect('/juegos');;
      });
   });

},
editar:function (req,res) {
   
   discos.retornaID(conexion,req.params.id,function (err,registros) {
      console.log(registros[0]);
      res.render('juegos/editar', {juego:registros[0]}); 
   });
},
actualizar:function (req,res) {
   console.log(req.body.nombre);
   console.log(req.body.requisitos);
   if(req.body.nombre){
      discos.actualizar(conexion,req.body,function (error) {});
      
   }
   res.redirect('/juegos'); 
   
   if(req.file){
         if(req.file.filename){
            discos.retornaID(conexion,req.body.id,function (err,registros) {

               var nameimage="public/images/"+(registros[0].imagen);
               
               if(deletear.existsSync(nameimage)){
                  deletear.unlinkSync(nameimage);
         
         
               }
               discos.actualizarimg(conexion,req.body,req.file, function (err) {});
            });
         }
         
   }
   
   res.redirect('/juegos'); 
}

} 