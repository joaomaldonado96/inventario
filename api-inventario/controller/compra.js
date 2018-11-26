'use strict'
var con = require('../connection')

function getCompra(req,res)
{
    let id= req.params.id;
    if(con){
        con.query(`SELECT * FROM compra WHERE idcompra = '${id}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver la compra'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe la compra'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}

function getCompraMes(req,res)
{
    var params = req.body;
    if(con){
        con.query(`SELECT * FROM compra WHERE mes = '${params.mes}' AND año = '${params.año}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver las compras'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existen compras en este mes'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}


function getCompraProducto(req,res)
{
    var params = req.body;
    if(con){
        con.query(`SELECT * FROM compra WHERE idproducto = '${params.idproducto}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver las compras'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existen compras'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}


function getCompraProductoMes(req,res)
{
    var params = req.body;
    if(con){
        con.query(`SELECT * FROM compra WHERE idproducto = '${params.idproducto}' AND mes = '${params.mes}' AND año = '${params.año}' `, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver las compras'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existen compras'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}

function saveCompra(req,res)
{
    if(con){
    var params = req.body;

        con.query(`INSERT INTO compra ( idcompra, idproducto, mes, año, cantidad, costoUnit, total, dañadas ) VALUES ('${params.idcompra}', 
        '${params.idproducto}', '${params.mes}','${params.año}','${params.cantidad}','${params.costoUnit}', '${params.total}', '${params.dañadas}')`, function (err, result) {
            if (err){
            res.status(500).send({message:'Error al guardar'});
            console.log(params);
            } 
            else{
                res.status(200).send({message:'1 compra agregada'});           
            }
        
        });

        
    }
 }

 function updateCompra(req,res)
{
    // if(con){
    // var id= req.params.id;
    // var update = req.body;
    // const sql ='UPDATE compra SET  referencia = '+ con.escape(update.referencia) +
    // ', tamaño = '+ con.escape(update.tamaño) +', precioUnit = '+ con.escape(update.precioUnit) +
    // ' WHERE idproducto = '+id;
    // con.query(sql, function (err, result) {
    //     if (err){
    //        res.status(500).send({message:'Error al guardar'});
    //     } 
    //     else{
    //         res.status(200).send({message:'1 producto modificada'});           
    //     }
       
    // });}
}

function deleteCompra(req,res)
{   
    if(con){
    let id= req.params.id;
    
    con.query(`SELECT * FROM compra WHERE idcompra = '${id}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al buscar la compra'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe  la compra'});   
             }else{
                con.query(`DELETE FROM compra WHERE idcompra = '${id}'`, function (err, result) {
                if (err){
                    res.status(500).send({message:'Error al eliminar'});
                } 
                else{
                    res.status(200).send({message:'se elimino la compra'});               
                }
                    
                 });               
             }
        }
            
     });}
           
}


module.exports={
    getCompra,
    getCompraMes,
    getCompraProducto,
    getCompraProductoMes,
    saveCompra, 
    updateCompra,
    deleteCompra
    
}