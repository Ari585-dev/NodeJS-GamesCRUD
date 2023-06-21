var express = require('express');
var router = express.Router();
const gamesController= require("../controllers/gamesController");

/* GET home page. */
router.get('/',function (req, res, next){
    res.send("ESTE ES EL INICIO DE LOS JUEGOS VIRTUALES");


});

module.exports = router;
