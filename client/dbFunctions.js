//insertar alumno
export async function insertarAlumno(apellido, nombre, email,Fnac, mobile,dni) {
    try {
        const response = await fetch("http://10.0.0.248:8080/alumno", {
            headers: {
                "Content-Type": "application/json",
            "cache": "no-cache"
            },
            method: "POST",
            body: JSON.stringify({
                apellido : apellido, 
                nombre : nombre, 
                email : email,
                Fnac : Fnac, 
                mobile : mobile,
                dni : dni
            })
        });
        const newAlumno = await response.json();
        console.log("Alumno creado con exito");
        console.log(response.status);
        return newAlumno;
    } catch (error) {
        console.log("Error al crear alumno: ", e.message)
    }
}
//obtener todos los alumnos 
export async function obtenerAlumnos(){
    try{
        const alumnos = await fetch("http://10.0.0.248:8080/",{
            headers: {
                "Content-Type": "application/json",
                "cache": "no-cache"
            },
        });
        const data = await alumnos.json();
        return data;
    }catch(e){
        return e.message
    }

}
//obtener alumno por su id
export async function obtenerAlumnoId(id){
    try {
        const alumnos = await fetch(`http://10.0.0.248:8080/alumno/:${id}`,{
            headers: {
                "Content-Type": "application/json",
                "cache": "no-cache"
            },
        });
        const data = alumnos.json();
        return data;
    } catch (error) {
        console.log(`Error al recuperar al alumno ${id}:`, e,message);
    }
}
//actualizar informacion de un alumno
export async function actualizarAlumno(id, apellido, nombre, email, Fnac, mobile, dni){
    try {
        const response = await fetch(`http://10.0.0.248:8080/alumno/actualizar/:${id}`,{
            headers: {
                "Content-Type": "application/json",
                "cache": "no-cache"
            },
            method: "PUT",
            body: JSON.stringify({
                id: id,
                apellido: apellido,
                nombre: nombre,
                email: email,
                Fnac: Fnac,
                mobile: mobile,
                dni: dni,
            })
        })
        const newActualizacion = response.json();
        console.log("Informacion actualizada con exito");
        console.log(response.status);
        return newActualizacion;
    } catch (error) {
        console.log(`Error al intentar actualizar al alumno ${id}: `, error.message);
    }
}
//eliminar alumno
export async function deleteAlumno(id) {
    try {
        const response = await fetch(`http://10.0.0.248:8080/alumno/actualizar/:${id}`, {
            headers: {
                "Content-Type": "application/json",
                "cache": "no-cache"
            },
            method: "DELETE"
        });
        console.log("Alumno eliminado con exito");
        console.log(response.status);
    } catch (error) {
        console.log(`Error al eliminar al alumno ${id}`, e.message);
    }
}