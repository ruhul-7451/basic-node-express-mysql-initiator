const mysql = require('mysql');

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "p_pay"
};

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database: ', error);
        return;
    }
    console.log('Connected to the MySQL server.');
});

module.exports = connection;