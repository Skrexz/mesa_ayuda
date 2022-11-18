const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mesa_de_ayuda'
});
 
connection.connect();

module.exports = {
    connection
}