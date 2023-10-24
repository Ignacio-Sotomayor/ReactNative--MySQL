import { StyleSheet, Text, View } from 'react-native';
import Lista from './components/lista.js'
import { obtenerAlumnos } from './dbFunctions';
import { useState, useEffect } from 'react';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Lista/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
