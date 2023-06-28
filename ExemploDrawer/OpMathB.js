import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function OpMathB() {
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  let resultado = 0

  const somar = () => {
    resultado = parseFloat(valor1) + parseFloat(valor2)
    alert('O resultado é: ' + resultado)
  }

  //const valor2=0  // somente leitura - constante
  //let valor3=0// exemplo variavel

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite Valor 1'
        keyboardType='numeric'
        onChangeText={valor1 => setValor1(valor1)}
        value={valor1}
        style={styles.input}
      >
      </TextInput>

      <TextInput
        placeholder='Digite Valor 2'
        keyboardType='numeric'
        onChangeText={valor2 => setValor2(valor2)}
        value={valor2}
        style={styles.input}
      >
      </TextInput>

      <Button
        onPress={somar}
        title='Pressione para Calcular'
      >
      </Button>


      <StatusBar style="auto" />
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
  input: {
    backgroundColor: 'grey',
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
});