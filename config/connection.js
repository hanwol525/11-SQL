const mysql = require("mysql2");

const sqlConnect = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ThisIsMyPW123!',
        database: 'employees_db'
    }
)

module.exports = sqlConnect;