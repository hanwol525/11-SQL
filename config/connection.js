const mysql = require("mysql2");

const sqlConnect = mysql.createConnection(
    {
        host: 'localhost',
        database: 'employees_db',
        user: 'root',
        password: 'ThisIsMyPW123!'
    }
)

module.exports = sqlConnect;