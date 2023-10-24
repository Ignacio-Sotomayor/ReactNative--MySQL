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

//recuperar todos los alumnos
app.get('/',async (req, res) => {
    const respuesta = await getAlumnos();
    res.status(200).send(respuesta)
})

//elegir alumno a recuperar
app.get('/alumno/:id', async(req,res)=>{
    const respuesta = await getAlumnoById(req.params.id);
    res.status(200).send(respuesta)
})

//agregar alumno
app.post('/alumno',async(req,res)=>{
    const {apellido, nombre, email, Fnac, mobile, dni}=req.body;
    const respuesta = await insertarRegistro(apellido, nombre, email, Fnac, mobile, dni);
    res.status(200).send(respuesta)
})

//actualizar alumno
app.put('/alumno/actualizar/:id', async(req,res) => {
    const { id,apellido, nombre, email, Fnac, mobile, dni} = req.body;
    const respuesta = await actualizarAlumnoById(id,apellido, nombre, email, Fnac, mobile, dni);
    res.status(200).send(respuesta)
})

//eliminar alumno
app.delete('/alumno/eliminar/:id', async(req,res)=>{
    const respuesta = await borrarAlumnoById(req.params.id);
    res.status(200).send(respuesta)
})

app.listen(PORT,() => {
    console.log(" El servidor esta corriendo en el puerto: " + PORT);
})