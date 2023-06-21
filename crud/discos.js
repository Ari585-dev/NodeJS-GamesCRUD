module.exports={
obtener:function(conexion,funcion){
conexion.query("SELECT * FROM discos", funcion);

},
insertar:function(conexion,datos,archivos,funcion){
    conexion.query("INSERT INTO discos ( nombre, imagen, requisitos) VALUES (?,?,?)",[datos.nombre, 
    archivos.filename, datos.requisitos],
     funcion);

},

retornaID:function(conexion,id,funcion){
    conexion.query("SELECT * FROM discos WHERE id=?",[id], funcion);

},

borrar:function(conexion,id,funcion){
    conexion.query("DELETE FROM discos WHERE id=?",[id],funcion);

},
actualizar:function(conexion,datos,funcion){
    conexion.query("UPDATE discos SET nombre=?, requisitos=? WHERE id=? ",[datos.nombre, datos.requisitos, datos.id], funcion);

},
actualizarimg:function(conexion,datos,archivo,funcion){
    conexion.query("UPDATE discos SET imagen=? WHERE id=? ",[archivo.filename, datos.id], funcion);

}


}