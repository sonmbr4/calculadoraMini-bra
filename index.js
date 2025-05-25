//import sumar from ('./operaciones/enteros')
//import {sumar, restar} from "./operaciones/enteros.js"

const expresion = require('express');
const cal = require('./operaciones/enteros.js')
const inventario = require('./operacionObjetos/inventario.js')



const app = expresion();

app.get('/quieroSumar', (req, res) =>{
    res.end('<h1>'+cal.sumar(3, 3)+'</h1>')
})

app.get('/consultarproductos', (req, res) =>{
    res.end('<h2>Mira la consola <h2>' + inventario.cargarDatos());
})


app.listen(7777, () =>{
    console.log('esta en linea')
})




const conexion = require('./config/connection')

app.get('/conectar', (req, res) =>{
    console.log("entramos al endpoint")
    console.log(conexion)
    res.end()
})


const modeloUsuario = require('./models/usuario.model')

app.get('/insertarusuario', (req,res)=>{
    const nuevoUsuario = new modeloUsuario({
        nombre: 'Juanito',
        edad: 30,
        correo: 'juan.perez@ejemplo.com'
    });

    nuevoUsuario.save()
        .then(usuario => {
            console.log('Usuario creado:', usuario);
        })
        .catch(err => {
            console.error('Error al crear usuario:', err);
        });
});


app.get('/consultar', (req, res) =>{
    modeloUsuario.find({nombre: 'Juanito'})
    .then(usuarios => {
        console.log('Usuarios encontrados:', usuarios);
    })
    .catch(err => {
        console.error('Error al buscar usuarios:', err);
    });
});

app.get('/actualizar', (req, res) => {
    modeloUsuario.findOneAndUpdate({_id: '68333fc0dfa4150912c24802'}, {
        edad:18,
        correo:'juanP@hot.com'
    })




})

