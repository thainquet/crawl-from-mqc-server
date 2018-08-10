var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'test',
    password: '1234',
    database: 'mqc'

});
module.exports = connection;