'use strict'

var app = require('./app');
var port = process.env.port || 3000;

app.listen(port, function() {
    console.log('Api rest test funcionando en http://localhost:' + port);
});