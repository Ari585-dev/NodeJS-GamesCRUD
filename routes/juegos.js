var express = require('express');
var router = express.Router();
const gamesController= require("../controllers/gamesController");
var multer = require('multer');
var fecha= Date.now();

var rutaparAlmacen= multer.diskStorage(
    {
        destination:function(request, file, callback){
            callback(null,'./public/images/');
        },
        filename:function(request, file, callback) {
            console.log(file);
            callback(null,fecha+"_"+file.originalname);
        }
    }
        

);

var carga= multer({ storage:rutaparAlmacen});

/* GET home page. */
router.get('/',gamesController.index);
router.get('/crear',gamesController.crear);

router.post("/",carga.single("archivo"),gamesController.guardar);
router.post('/eliminar/:id',gamesController.eliminar);
router.get('/editar/:id',gamesController.editar);
router.post("/actualizar",carga.single("archivo"),gamesController.actualizar);




module.exports = router;
