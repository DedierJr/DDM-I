import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [qtd_carne, setCarne] = useState("");
  const [qtd_frango, setFrango] = useState("");
  const [qtd_queijo, setQueijo] = useState("");
  const [qtd_vento, setVento] = useState("");

  const calcular = () => {
    total =
      5.3 * qtd_carne + 4.7 * qtd_frango + 4.0 * qtd_queijo + 8.0 * qtd_vento;
    Speech.speak("Total a pagar: R$" + total);
    alert("Total a pagar: R$" + total);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pastel de carne R$5,30 qtd"
        keyboardType="numeric"
        onChangeText={(qtd_carne) => setCarne(qtd_carne)}
        value={qtd_carne}
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="Pastel de frango R$4,70 qtd"
        keyboardType="numeric"
        onChangeText={(qtd_frango) => setFrango(qtd_frango)}
        value={qtd_frango}
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="Pastel de queijo R$4,00 qtd"
        keyboardType="numeric"
        onChangeText={(qtd_queijo) => setQueijo(qtd_queijo)}
        value={qtd_queijo}
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="Pastel de vento R$8,00 qtd"
        keyboardType="numeric"
        onChangeText={(qtd_vento) => setVento(qtd_vento)}
        value={qtd_vento}
        style={styles.input}
      ></TextInput>

      <Button
        onPress={calcular}
        title="Pressione para calcular o total"
      ></Button>
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
