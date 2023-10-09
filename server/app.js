import express from "express";
import cors from "cors"
import { 
    PORT 
    } from "./config.js";
import {
    getAlumnos,
    getAlumnoById,
    insertarRegistro,
    actualizarAlumnoById,
    borrarAlumnoById
    } from './database.js'
const app = express();
app.use(express.json())
app.use(cors());

app.get('/',async (req, res) => {
    const respuesta = await getAlumnos();
    res.status(200).send(respuesta)
})

app.get('/alumno/:id', async(req,res)=>{
    const respuesta = await getAlumnoById(req.params.id);
    res.status(200).send(respuesta)
})

app.post('/alumno',async(req,res)=>{
    const {apellido, nombre, email, Fnac, mobile, dni}=req.body;
    const respuesta = await insertarRegistro(apellido, nombre, email, Fnac, mobile, dni);
    res.status(200).send(respuesta)
})

app.put('/alumno/actualizar', async(req,res) => {
    const { apellido, nombre, email, Fnac, mobile, dni} = req.body;
    const respuesta = await actualizarAlumnoById(apellido, nombre, email, Fnac, mobile, dni);
    res.status(200).send(respuesta)
})

app.delete('/alumno/eliminar/:id', async(req,res)=>{
    const respuesta = await borrarAlumnoById(req.params.id);
    res.status(200).send(respuesta)
})

app.listen(PORT,() => {
    console.log(" El servidor esta corriendo en el puerto: " + PORT);
})