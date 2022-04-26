const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'phtfaw4p6a970uc0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'o2pcqu2di101rbzr',
    password: 'pnzs8p59hrocvon8',
    database: 'yt23oldwpm5owhkn',
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Ahora estamos en Linea :D');
    }
  });

  module.exports = mysqlConnection;