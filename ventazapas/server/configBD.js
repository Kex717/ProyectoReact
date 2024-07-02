
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "zapatos",
    port: 3307,
})

connection.connect((error)=>{
    if(!error){
        {console.log("conexion exitosa")}
    }else{
        {console.log("conexion fallida"+error)}
    }
})

module.exports = connection
