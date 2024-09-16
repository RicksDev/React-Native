import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Contador() {
  const [count, setCount] = useState(0);

  const [msg, setMsgs] = useState("");

  useEffect(() => {
    setMsgs("O valor do count foi atualizado " + count + " Vez(es)");
  }, [count]);

  return (
    <>
      <Text style={estilos.texto}>Você clicou aqui {count}</Text>
      <Text style={estilos.texto2}>{msg}</Text>

      <View style={estilos.buttonList}>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          title="Clique aqui!"
        />
      </View>
      <View style={estilos.buttonList}>
        <Button
          onPress={() => {
            setCount(count - 1);
          }}
          title="Diminuir"
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  buttonList: {
    padding: 10,
  },
  texto: {
    color: "#CD3333",
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  texto2: {
    color: "blue",
    fontSize: 15,
    fontFamily: "monospace",
    textAlign: "center",
  },
});
