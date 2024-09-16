import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Texto() {
    //Hocks === UseState

    const [texto, setTexto] = useState('Texto do novo componente');

    useEffect(() => {
        setTexto('Outro texto')
    }, []);
  return (
    <Text style={estilos.texto}>{texto}</Text>
  )
};

const estilos = StyleSheet.create({
    texto: {
        color: "#CD3333",
        fontSize:20,
        fontWeight:'bold',
        marginTop :8,
        textAlign: 'center'
    }
});
