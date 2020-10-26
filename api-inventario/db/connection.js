var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "inventario"
});
/**
 con.connect(function(err) {
     if (err) throw err;
     console.log("Conecto con la base de datos");
 });
 *
 */

module.exports = con;