import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.titleTop}>Detalhes do sistema</Text>
      </View>
      <View style={estilos.meio}>
        <Text style={estilos.nomeLista}>Lista de compras</Text>
      </View>
      <View style={estilos.descricao}>
        <Text>lorem ipsum o Ricardo é muito bom, ele ta escrevendo qualquer coisa só para preencher no espaço vazio, entende? Eu to cansado
            e ainda tenho que ir treinar. Tamo junto
        </Text>
        <Text style= {estilos.preco}>R$40,00</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "blue",
  },
  titleTop: {
    width: "100%",
    textAlign: "center",
    color: "white",
    margin: "auto",
    fontFamily: "monospace",
    fontSize: 17,
  },
  meio: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
  },
  nomeLista: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "monospace",
    margin: 'auto'
  },
  descricao: {
    color: '#00008B',
    marginLeft: 20,
    fontSize: 16,
    lineHeight:16,
    paddingTop: 20
  },
  preco: {
    color: 'green',
    textAlign: 'center',
    fontSize: 26,
    

  }
});
