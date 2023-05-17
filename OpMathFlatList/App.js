import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Speech from "expo-speech";
import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  Pressable,
  Image,
} from "react-native";
export default function App() {
  const [VALOR1, setValor1] = useState("");
  const [VALOR2, setValor2] = useState("");

  const calcular = (item) => {
    if (item.id === "item1") {
      total = parseFloat(VALOR1) + parseFloat(VALOR2);
      alert("Total: " + total);
      Speech.speak("Total: " + total);
    }
    if (item.id === "item2") {
      total = parseFloat(VALOR1) - parseFloat(VALOR2);
      alert("Total: " + total);
      Speech.speak("Total: " + total);
    }
    if (item.id === "item3") {
      total = parseFloat(VALOR1) * parseFloat(VALOR2);
      alert("Total: " + total);
      Speech.speak("Total: " + total);
    }
    if (item.id === "item4") {
      total = parseFloat(VALOR1) / parseFloat(VALOR2);
      alert("Total: " + total);
      Speech.speak("Total: " + total);
    }
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={styles.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },
            styles.title,
          ]}
          onPress={() => {
            calcular(item);
          }}
        >
          <View style={styles.alinhamentoLinha}>
            <Image style={styles.image} source={{ uri: item.imageUri }} />

            {/* // coloca alinhamento em coluna justificado flex-start */}
            <View style={styles.alinhamentoColuna}>
              <Text style={styles.itemStyle}>{item.title}</Text>
              <Text style={styles.itemStyle}>{item.nome} </Text>
              {/* fecha alinhamento colunas */}
            </View>
            {/* fecha alinhamento linhas */}
          </View>
        </Pressable>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View style={styles.separador} />
    );
  };

  const DATA = [
    {
      id: "item1",
      title: "Soma",
      imageUri: "https://cdn-icons-png.flaticon.com/256/54/54414.png",
    },
    {
      id: "item2",
      title: "Subtração",
      imageUri: "https://cdn-icons-png.flaticon.com/512/6401/6401725.png",
    },
    {
      id: "item3",
      title: "Multiplicação",
      imageUri: "https://cdn-icons-png.flaticon.com/512/43/43165.png",
    },
    {
      id: "item4",
      title: "Divisão",
      imageUri: "https://cdn-icons-png.flaticon.com/512/660/660236.png",
    },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="VALOR 1"
        keyboardType="numeric"
        onChangeText={(VALOR1) => setValor1(VALOR1)}
        value={VALOR1}
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="VALOR 2"
        keyboardType="numeric"
        onChangeText={(VALOR2) => setValor2(VALOR2)}
        value={VALOR2}
        style={styles.input}
      ></TextInput>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={renderItemNovo}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "light-grey",
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  containerSafeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  itemStyle: {
    fontSize: 14,
    padding: 5,
  },
  alinhamentoLinha: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  alinhamentoColuna: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },

  separador: {
    height: 1,
    width: "100%",
    backgroundColor: "#C8C8C8",
  },
});
