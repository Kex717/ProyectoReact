
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10715863",
    password: "XQ2PS9rFXB",
    database: "sql10715863",
    port: 3306,
})

connection.connect((error)=>{
    if(!error){
        {console.log("conexion exitosa")}
    }else{
        {console.log("conexion fallida")}
    }
})

module.exports = connection
