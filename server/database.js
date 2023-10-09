export async function getAlumnoById(id){
    const [row] = await pool.query('SELECT * FROM alumnos WHERE id_alumno = ?', [id]);
    return row;
}

export async function getAlumnos(){
    const [row] = await pool.query('SELECT * FROM alumnos');
    return row;
}

export async function actualizarAlumnoById(id, apellido, nombre, email, fnac, mobile, dni){
    const [row] = await pool.query(`
    UPDATE alumnos 
    SET 
    apellido_alumno = ?, 
    nombre_alumno = ?, 
    email_alumno = ?, 
    fNac_alumno = ?, 
    mobile_alumno = ?, 
    dni_alumno = ? 
    WHERE id_alumno = ?
    `, [apellido, nombre, email, fnac, mobile, dni, id])
    return row;
}

export async function borrarAlumnoById(id){
    const [row] = await pool.query('DELETE FROM alumnos ', [id]);
    return row;
}

export async function insertarRegistro(apellido, nombre, email, fnac, movil, dni) {
    const [row] = await pool.query('INSERT INTO alumnos VALUES (apellido_alumno, nombre_alumno, email_alumno, fnac_alumno, movil_alumno, dni_alumno) = (?,?,?,?,?,?)', [apellido, nombre, email, fnac, movil, dni]);
    return row;
}
