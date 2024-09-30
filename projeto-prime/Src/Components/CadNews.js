import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function CadNews() {

    const [formState, setFormState] = useState(initilForm);

  const initilForm = {
    nome: '',
    email: '',
    telefone:'',
    endereco: '',
    senha: '',

  }

  const handleInput = (event) => {
    event.preventDefault();
    const target = event.currentTarget;
    const {value, name} = target;

    setFormState({ ...formState, [name]: value})

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validação
    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os seus campos.');
        return;
    }

    //Aqui você pode lidar com o envio dos dados
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha', senha);

    setFormState({...initilForm});

  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome:"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Digite o seu e-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Enviar" onPress={handleSubmit}/>
      {nome && email && senha && (
        <Text>
            Nome: {nome},
            Email: {email},
            Senha: {senha}
            {/* Adicionando uma máscara para senha */}
            Nova senha: {'*'.repeat(senha.length)};
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
