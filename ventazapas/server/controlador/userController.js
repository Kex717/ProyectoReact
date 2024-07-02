/* eslint-disable no-undef */
// const fs = require('fs').promises;
// const path = require('path');

// const userFilepath = path.join(__dirname, "../../src/componentes/usuariosRegistrados.json");

// const controller = {
//     register: async function (req, res) {
//         try {
//             const userData = await fs.readFile(userFilepath, "utf-8");
//             const users = JSON.parse(userData);

//             const ultimo = users.length;
//             const usuarioNuevo = {
//                 id: ultimo + 1,
//                 identificacion: req.body.identificacion,
//                 nombre: req.body.nombres,
//                 apellido: req.body.apellidos,
//                 email: req.body.email,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 fechaNacimiento: req.body.fechaNacimiento,
//                 password: req.body.password,
//                 estado: "activo",
//                 rol: "Usuario",
//                 fecha_creacion: new Date(),
//             };

//             for (x of users) {
//                 if (x.email === req.body.email || x.identificacion === req.body.identificacion) {
//                     res.status(400).send("El email ya existe");
//                     return;
//                 }
//             }

//             users.push(usuarioNuevo);

//             await fs.writeFile(userFilepath, JSON.stringify(users, null, 4));
//             res.status(200).send("Usuario Registrado");
//         } catch (error) {
//             console.error("Error al procesar el registro", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     },




//     login: async function (req, res) {
//         try {
//             const usersData = await fs.readFile(userFilepath, "utf-8");
//             const users = JSON.parse(usersData);

//             for (x of users) {
//                 if (
//                     x.email === req.body.email &&
//                     x.password === req.body.password &&
//                     x.rol === req.body.rol
//                 ) {
//                     res.status(200).send("0k");
//                     return;
//                 }
//             }
//             res.status(400).send("Error");
//         } catch (error) {
//             console.error("Error al procesar el registro:", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     },
// };
// module.exports = controller;

const express = require("express")
const app = express();
const axios = require('axios')
const cors = require("cors");
const connection = require("../configBD");
app.use(cors());

const controller = {
    register: function (req, res) {
        let config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: 'https://api.jsonbin.io/v3/b/6654d654ad19ca34f87015e6',
            headers: {
                'Content-Type': 'application/json',
                "X-Master-Key": "$2a$10$5DBJMjDObKOZdL5YZE0Cr.DgI5OPs0.4l6MEoy5.Y0WZxBkr09ATm"
            }
        }
        axios(config)
        .then(result => {
            let id = result.data.record.length + 1
            const usuarioNuevo = {
                id: id,
                identificacion: req.body.identificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario",
                fecha_creación: new Date(),
            };
            if (result.data.record.length === 0) {
                result.data.record.push(usuarioNuevo)
            }
            else {
                for (x of result.data.record) {
                    if (x.email === req.body.email) {
                        res.status(400).send("Usuario ya existe en la Base de Datos")
                        return
                    }
                }
                result.data.record.push(usuarioNuevo)
            }

            fetch("https://api.jsonbin.io/v3/b/6654d654ad19ca34f87015e6", {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                    "X-Master-Key": "$2a$10$5DBJMjDObKOZdL5YZE0Cr.DgI5OPs0.4l6MEoy5.Y0WZxBkr09ATm"
                },
                body: JSON.stringify(result.data.record),
            })
            .then(response => {
                if (response.status === 200) {
                    res.status(200).send('ok')
                    return
                }
                else {
                    res.status(400).send("No Ok")
                    return
                }
            })
        })
    },

    registerBD: function (req, res){
        const {identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, password} = JSON.parse(JSON.stringify(req.body));
        console.log("hola")
        try{
            const consulta = "INSERT INTO sql10715863.Usuarios (identificacion,nombre,Apellido,email,direccion,telefono,password,FechaCreacion) VALUES(?????????)"
            connection.execute(consulta, [identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, password, new Date()])
            res.status(200).send("Registro exitoso")
            console.log("registro exitoso")
        }catch(error){
            console.log("registro fallido ",error)
            res.status(500).send("error al insertar")
        }
    }
// 
    // controller.js


    // registerBD: async function (req, res) {
    //     const { identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, password } = req.body;

    //     try {
    //         const [rows] = await connection.execute('SELECT * FROM Usuarios WHERE email = ? OR identificacion = ?', [email, identificacion]);

    //         if (rows.length > 0) {
    //             res.status(400).send('El email o la identificación ya existe');
    //             return;
    //         }

    //         const [result] = await connection.execute(
    //             'INSERT INTO Usuarios (identificacion, nombre, Apellido, email, direccion, telefono, fechaNacimiento, password, fecha_creacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    //             [identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, password, new Date()]
    //         );

    //         res.status(200).send('Usuario Registrado');
    //     } catch (error) {
    //         console.error('Error al procesar el registro:', error);
    //         res.status(500).send('Error interno del servidor');
    //     }
    // },

    // login: async function (req, res) {
    //     const { email, password, rol } = req.body;

    //     try {
    //         const [rows] = await connection.execute('SELECT * FROM Usuarios WHERE email = ? AND password = ? AND rol = ?', [email, password, rol]);

    //         if (rows.length > 0) {
    //             res.status(200).send('Ok');
    //         } else {
    //             res.status(400).send('Error');
    //         }
    //     } catch (error) {
    //         console.error('Error al procesar el inicio de sesión:', error);
    //         res.status(500).send('Error interno del servidor');
    //     }
    // },

}
module.exports = controller;