import React from "react";
import { StyleSheet, TextInput, Button, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';

function form() {
  const { control, handleSubmit, errors } = useForm();
  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{ paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8 }}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>First Name is required.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{ paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8 }}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true, minLength: 8 }}
        defaultValue=""
      />
      {errors.lastName?.type === "required" && <Text>Last Name is required.</Text>}
      {errors.lastName?.type === "minLength" && <Text>Minimum 8 characters are required</Text>}
      <Button title="Submit" onPress={handleSubmit((data) => console.log(data))} />
    </View>
  );
}
z3

export default function Lista() {

  const [alumnos, setAlumnos] = useState([]);

  const data = [
  ]

  useEffect(() => {
    axios.get('http://10.0.0.248:8080/')
      .then(response => setAlumnos(response.data))
      .catch(error => console.error(error));
  }, [])


  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 400, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 56, width: 750 },
  rows: { height: 56, width: 750 },
  text: { textAlign: 'center' }
});