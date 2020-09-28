'use strict'

var con = require('../connection')

function getCompras(req, res) {
    let id = req.params.id;
    if (con) {
        con.query(`SELECT * FROM compra `, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver la compra' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existe la compra' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}

function getCompra(req, res) {
    let id = req.params.id;
    if (con) {
        con.query(`SELECT * FROM compra WHERE idcompra = '${id}'`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver la compra' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existe la compra' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}

function getIdCompra(req, res) {
    let id = req.params.id;
    if (con) {
        con.query(`SELECT max(idcompra) as 'idCompra' FROM compra`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver la compra' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existe la compra' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}

function getCompraFecha(req, res) {
    var params = req.body;
    if (con) {
        con.query(`SELECT * FROM compra WHERE fecha = '${params.fecha}' `, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver las compras' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existen compras en este mes' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}

function getCompraCompleta(req, res) {
    let id = req.params.id;
    if (con) {
        con.query(`SELECT * FROM comprapro WHERE idcompra = '${id}'`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver las compras' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existen compras' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}

function getCompraProducto(req, res) {
    var params = req.body;
    if (con) {
        con.query(`SELECT * FROM comprapro WHERE idproducto = '${params.idproducto}'`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver las compras' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existen compras' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}


function getCompraProductoMes(req, res) {
    var params = req.body;
    if (con) {
        con.query(`SELECT * FROM comprapro WHERE idproducto = '${params.idproducto}' AND mes = '${params.mes}' AND año = '${params.año}' `, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver las compras' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existen compras' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}

function saveCompra(req, res) {
    if (con) {
        var params = req.body;

        con.query(`INSERT INTO compra ( NombreProvedor, telefonoProvedor, unidades, fecha, total ) VALUES
         ('${params.NombreProvedor}', '${params.telefonoProvedor}',
        '${params.unidades}','${params.fecha}','${params.total}')`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al guardar' });
                console.log(params);
            } else {
                res.status(200).send({ message: '1 compra agregada', result });
            }

        });


    }
}

function saveCompraPro(req, res) {
    if (con) {
        var params = req.body;

        con.query(`INSERT INTO comprapro ( idproducto, idcompra, unidades, unidades_resi, danadas, costoUnit, total ) VALUES ('${params.idproducto}', '${params.idcompra}',
        '${params.unidades}','${params.unidades_resi}','${params.danadas}','${params.costoUnit}','${params.total}')`, function(err, result) {
            if (err) {
                res.status(500).send({ err });
            } else {
                res.status(200).send({ message: '1 compra agregada' });
            }

        });


    }
}

function updateCompra(req, res) {
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

function deleteCompra(req, res) {
    if (con) {
        let id = req.params.id;

        con.query(`SELECT * FROM compra WHERE idcompra = '${id}'`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al buscar la compra' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existe  la compra' });
                } else {
                    con.query(`DELETE FROM compra WHERE idcompra = '${id}'`, function(err, result) {
                        if (err) {
                            res.status(500).send({ message: 'Error al eliminar' });
                        } else {
                            res.status(200).send({ message: 'se elimino la compra' });
                        }

                    });
                }
            }

        });
    }

}


module.exports = {
    getCompra,
    getCompras,
    getCompraCompleta,
    getCompraFecha,
    getCompraProducto,
    getCompraProductoMes,
    saveCompra,
    updateCompra,
    deleteCompra,
    saveCompraPro,
    getIdCompra


}