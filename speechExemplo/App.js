import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const falar = () => {
    const thingToSay = "1";
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={falar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
