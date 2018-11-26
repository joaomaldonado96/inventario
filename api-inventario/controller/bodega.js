'use strict'
var con = require('../connection')

function getInventarioProducto(req,res)
{
    let id= req.params.id;

    if(con){
        con.query(`SELECT * FROM bodega WHERE idbodega = '1' AND idproducto = '${id}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver el inventario'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe el producto'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}



function getInventario(req,res)
{
    if(con){
    con.query(`SELECT * FROM bodega WHERE idbodega='1'`, function (err, result) {
    if (err){
        res.status(500).send({message:'Error al devolver los productos'});
    } else{
        if(!result[0]){
             res.status(404).send({message:'No existen productos'});   
        }else{
            res.status(200).send({result});               
        }
    }
            
    });}

}

function saveInventario(req,res)
{
    if(con){
    var params = req.body;

    con.query(`INSERT INTO bodega ( idbodega, idproducto, cantidad, dañadas ) VALUES ('1', 
    '${params.idproducto}', '${params.cantidad}', '${params.dañadas}')`, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
           console.log(params);
        } 
        else{
            res.status(200).send({message:'1 producto agregado'});           
        }
       
    });}
 }

 function updateInvetario(req,res)
{
    if(con){
    var id= req.params.id;
    var update = req.body;
    const sql ='UPDATE bodega SET  cantidad = '+ con.escape(update.cantidad) +
    ', dañadas = '+ con.escape(update.dañadas) +
    ' WHERE idbodega ='+ 1 +' AND idproducto = '+id;
    con.query(sql, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
        } 
        else{
            res.status(200).send({message:'1 producto modificada'});           
        }
       
    });}
}



module.exports={
    getInventarioProducto,
    getInventario, 
    saveInventario,
    updateInvetario
    
}