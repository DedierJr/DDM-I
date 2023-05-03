import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";

const App = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Laranja",
      nome: "Romeo Shakespeare de Souza Envenenado",
      imageUri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hoVnor8SGv4LfNOHIBasnncL_jnrbme3ts5TTz4&s",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      nome: "Cleiton",
      imageUri:
        "https://www.shutterstock.com/image-photo/little-dog-listens-music-earphones-260nw-1924565528.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Preto",
      nome: "Spinel",
      imageUri:
        "https://i.pinimg.com/736x/21/91/4e/21914e914097c6ea2333fb60193c0585.jpg",
    },
    {
      id: "4",
      title: "Preto",
      nome: "Puma",
      imageUri:
        "https://i.kym-cdn.com/photos/images/newsfeed/001/384/545/7b9.jpg",
    },
  ];

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View style={styles.separador} />
    );
  };
  const LongClick = (item) => {
    alert("voce pressionou longo e " + item.title);
  };

  const ShortClick = (item) => {
    alert("voce pressionou curto e " + item.title);
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={styles.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },
            styles.title,
          ]}
          onLongPress={() => {
            LongClick(item);
          }}
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

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={renderItemNovo}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default App;
