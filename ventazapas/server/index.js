const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const conexion = require('./configBD')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    // res.send('Hello World!')
    let config = {
        method: "GET",
        url: 'https://api.jsonbin.io/v3/b/6654d654ad19ca34f87015e6',
        headers:{ "Content-Type": "Application/json",
        "X-Master-Key": "$2a$10$5DBJMjDObKOZdL5YZE0Cr.DgI5OPs0.4l6MEoy5.Y0WZxBkr09ATm"
        }
    }
    axios(config)
    .then(response => {
        res.send(response.data.record)
    })
});

const user = require("../server/controlador/userController");
app.use("/registro-usuario", user.registerBD);
// app.use("/login",user.login);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto' + PORT)
})

app.get('/todos-los-Usuarios',(req,res)=>{
    conexion.connect(function(err){
        if (err) throw err;
        conexion.query("SELECT * FROM sql10715863.Usuarios",function(err, result, fields){
            if (err) throw err;
            res.send(result)
        });
    })
})
