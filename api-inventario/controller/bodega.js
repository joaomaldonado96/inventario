'use strict'
var con = require('../connection')

function getInventarioProducto(req, res) {
    let id = req.params.id;

    if (con) {
        con.query(`SELECT * FROM bodega WHERE idbodega = '1' AND idproducto = '${id}'`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver el inventario' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existe el producto en bodega' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}

function getunidadesProducto(req, res) {
    let id = req.params.id;

    if (con) {
        con.query(`SELECT sum(unidades_Disponible + unidades_NoDisponible + danadas) as 'unidades' 
         FROM bodega WHERE idbodega = '1' AND idproducto = '${id}'`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver el inventario' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existe el producto en bodega' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }
}



function getInventario(req, res) {
    if (con) {
        con.query(`SELECT bodega.*,producto.* FROM bodega, producto where bodega.idproducto = producto.idproducto and idbodega='1'`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al devolver los productos' });
            } else {
                if (!result[0]) {
                    res.status(404).send({ message: 'No existen productos en bodega' });
                } else {
                    res.status(200).send({ result });
                }
            }

        });
    }

}

function saveInventario(req, res) {
    if (con) {
        var params = req.body;

        con.query(`INSERT INTO bodega ( idbodega, idproducto, unidades_Disponible, unidades_NoDisponible, danadas ) VALUES ('1', 
    '${params.idproducto}', '${params.unidades_Disponible}', '${params.unidades_NoDisponible}', '${params.danadas}')`, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al guardar' });
                console.log(params);
            } else {
                res.status(200).send({ message: '1 producto agregado' });
            }

        });
    }
}

function updateInvetario(req, res) {
    if (con) {
        var id = req.params.id;
        var update = req.body;
        const sql = 'UPDATE bodega SET  unidades_Disponible = ' + con.escape(update.unidades_Disponible) +
            ', unidades_NoDisponible = ' + con.escape(update.unidades_NoDisponible) +
            ', danadas = ' + con.escape(update.danadas) +
            ' WHERE idbodega =' + 1 + ' AND idproducto = ' + id;
        con.query(sql, function(err, result) {
            if (err) {
                res.status(500).send({ message: 'Error al guardar' });
            } else {
                res.status(200).send({ message: '1 producto modificada' });
            }

        });
    }
}



module.exports = {
    getInventarioProducto,
    getInventario,
    saveInventario,
    updateInvetario,
    getunidadesProducto

}