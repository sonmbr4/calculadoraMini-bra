//import sumar from ('./operaciones/enteros')
import {sumar, restar} from "./operaciones/enteros.js"
import express from "./node_modules/express/lib/express.js"
import

const exp = require('express');
const cal = require('./operaciones/enteros.js')

const app = exp();

app.get('/quieroSumar', (req, res) =>{
    res.end('<h1>'+enteros.sumar(3, 3)+'</h1>')
})

app.listen(7777, () =>{
    console.log('esta en linea')
})

