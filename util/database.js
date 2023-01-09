const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '@Ritesh123'
});

module.exports = pool.promise();

// git remote add origin https://github.com/riteshsute/demo.git
// git branch -M main
// git push -u origin main