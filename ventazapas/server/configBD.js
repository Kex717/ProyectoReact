
const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host: "viaduct.proxy.rlwy.net",
//     user: "root",
//     password: "VCEAcrqECfjkeVNbulHBgDVanYJjZaol",
//     database: "railway",
//     port: 55731,
// })

const pool = mysql.createPool({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    password: "VCEAcrqECfjkeVNbulHBgDVanYJjZaol",
    database: "railway",
    port: 55731,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});




// const pool = mysql.createPool({
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "ecommerce",
//     port: 3307,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

module.exports = pool.promise();

// module.exports = connection
