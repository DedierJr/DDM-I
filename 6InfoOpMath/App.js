import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  let resultado = 0;

  const somar = () => {
    resultado = parseFloat(valor1) + parseFloat(valor2);
    Speech.speak("O resultado é: " + resultado);
  };

  const subtrair = () => {
    resultado = parseFloat(valor1) - parseFloat(valor2);
    Speech.speak("O resultado é: " + resultado);
  };

  const multiplicar = () => {
    resultado = parseFloat(valor1) * parseFloat(valor2);
    Speech.speak("O resultado é: " + resultado);
  };

  const dividir = () => {
    resultado = parseFloat(valor1) / parseFloat(valor2);
    Speech.speak("O resultado é: " + resultado);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite Valor 1"
        keyboardType="numeric"
        onChangeText={(valor1) => setValor1(valor1)}
        value={valor1}
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="Digite Valor 2"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2)}
        value={valor2}
        style={styles.input}
      ></TextInput>

      <Button onPress={somar} title="Pressione para somar"></Button>
      <Button onPress={subtrair} title="Pressione para subtrair"></Button>
      <Button onPress={multiplicar} title="Pressione para multiplicar"></Button>
      <Button onPress={dividir} title="Pressione para dividir"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "grey",
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
