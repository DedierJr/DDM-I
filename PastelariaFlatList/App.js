import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  Pressable,
  Image,
} from "react-native";
export default function App() {
  const [qtd_carne, setCarne] = useState("");
  const [qtd_frango, setFrango] = useState("");
  const [qtd_queijo, setQueijo] = useState("");
  const [qtd_vento, setVento] = useState("");

  const calcular = () => {
    total =
      5.3 * qtd_carne + 4.7 * qtd_frango + 4.0 * qtd_queijo + 8.0 * qtd_vento;
    alert("Total a pagar: R$" + total);
  };

  const ShortClick = (item) => {
    alert("Total: ");
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
            ShortClick(item);
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
      title: "Pix",
      imageUri:
        "https://cdn.icon-icons.com/icons2/3245/PNG/512/pix_icon_198027.png",
    },
    {
      id: "item2",
      title: "Cartão",
      imageUri: "https://cdn-icons-png.flaticon.com/512/62/62780.png",
    },
    {
      id: "item3",
      title: "Dinheiro",
      imageUri: "https://cdn-icons-png.flaticon.com/512/4578/4578534.png",
    },
  ];

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
    backgroundColor: "grey",
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
