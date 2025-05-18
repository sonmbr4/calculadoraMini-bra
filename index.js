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

