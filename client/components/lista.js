import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios';

export default function Lista() {

    const [alumnos, setAlumnos] = useState([]);
    
    const data = [
        ['id', 'Nombre\t\t', 'Apellido\t\t', 'Email', 'Fecha de \n nacimiento', 'Telefono', 'DNI']
    ]

    useEffect(() => {
        axios.get('http://10.0.0.248:8080/')
            .then(response => setAlumnos(response.data))
            .catch(error => console.error(error));
    }, [])

    
    
    
    var dateParts;
    var jsDate;
    var fecha="";
    var email="";
    var substr;

    alumnos.map((alumno, index) => (

        dateParts = alumno.fnac_alumnos.split("-"),
        jsDate = new Date(dateParts[0], dateParts[1] -1 , dateParts[2].substr(0,2)),
        
        fecha = jsDate.getDate() +"/"+jsDate.getMonth()+"/"+jsDate.getFullYear(),
        console.log(fecha),

        email = alumno.email_alumno,
        substr = email.slice(0, email.indexOf('@'))+ '\n'+ email.slice(email.indexOf('@')),
        console.log(substr),

        data.push(
            [
                alumno.id_alumno,
                alumno.nombre_alumno,
                alumno.apellido_alumno,
                substr,
                fecha,
                alumno.mobile_alumno,
                alumno.dni_alumno
            ]
        )
    ));

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                    <Rows data={data} style={styles.rows} textStyle={styles.text}/>
                </Table>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 400, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 56, width:750},
  rows: {  height: 56, width:750},
  text: { textAlign: 'center' }
});