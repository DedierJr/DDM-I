import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  let resultado = 0;

  const somar = () => {
    resultado = parseFloat(valor1) / (parseFloat(valor2) * parseFloat(valor2));
    if (resultado < 18) {
      Speech.speak(
        "Seu IMC é: " + resultado.toFixed(2) + "Você está abaixo do peso"
      );
    }
    if (resultado >= 30) {
      Speech.speak(
        "Seu IMC é: " + resultado.toFixed(2) + "Você está acima do peso"
      );
    } else {
      Speech.speak("Seu IMC é: " + resultado.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Informe seu peso"
        keyboardType="numeric"
        onChangeText={(valor1) => setValor1(valor1)}
        value={valor1}
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="Informe sua altura"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2)}
        value={valor2}
        style={styles.input}
      ></TextInput>

      <Button onPress={somar} title="Pressione para calcular"></Button>
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
