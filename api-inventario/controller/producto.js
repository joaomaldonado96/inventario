'use strict'
var con = require('../connection')

function getProducto(req,res)
{
    let id= req.params.id;
    if(con){
        con.query(`SELECT * FROM producto WHERE idproducto = '${id}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver el producto'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe el producto'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}



function getProductos(req,res)
{
    if(con){
    con.query(`SELECT * FROM producto`, function (err, result) {
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

function saveProducto(req,res)
{
    if(con){
    var params = req.body;

    con.query(`INSERT INTO producto ( idproducto, referencia, tamaño, precioUnit ) VALUES ('${params.idproducto}', 
    '${params.referencia}', '${params.tamaño}', '${params.precioUnit}')`, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
           console.log(params);
        } 
        else{
            res.status(200).send({message:'1 producto agregado'});           
        }
       
    });}
 }

 function updateProducto(req,res)
{
    if(con){
    var id= req.params.id;
    var update = req.body;
    const sql ='UPDATE producto SET  referencia = '+ con.escape(update.referencia) +
    ', tamaño = '+ con.escape(update.tamaño) +', precioUnit = '+ con.escape(update.precioUnit) +
    ' WHERE idproducto = '+id;
    con.query(sql, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
        } 
        else{
            res.status(200).send({message:'1 producto modificada'});           
        }
       
    });}
}

function deleteProducto(req,res)
{   
    if(con){
    let id= req.params.id;
    
    con.query(`SELECT * FROM producto WHERE idproducto = '${id}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al buscar el producto'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe  el producto'});   
             }else{
                con.query(`DELETE FROM producto WHERE idproducto = '${id}'`, function (err, result) {
                if (err){
                    res.status(500).send({message:'Error al eliminar'});
                } 
                else{
                    res.status(200).send({message:'se elimino el producto'});               
                }
                    
                 });               
             }
        }
            
     });}
           
}


module.exports={
    getProducto,
    getProductos, 
    saveProducto,
    updateProducto,
    deleteProducto
    
}