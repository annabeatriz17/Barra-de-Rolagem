import { React, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao app da Gossip Girls</Text>
      <Text style={styles.description}>Welcome to the Gossip Girls app</Text>
      <Image style={styles.image} source={require('./assets/img/gossipgirls.png')} />

      <TextInput style={styles.input} placeholder="ESCREVA SUA FOFOCA AQUI" onChangeText={text => setInputText(text)} />

      <Button title="Enviar" />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Enviar mensagem')}>
        <Text style={styles.buttonText}>SAIBA MAIS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feda15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 12,
    fontSize: 20,
    color: '#34495e',
  },
  image: {
    justifyContent: 'center',
    margin:20,
    width: 200,
    height: 250,
  },
  input: {
    marginTop: 20,
    width: 250,
    height: 40,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#ff6b81',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});