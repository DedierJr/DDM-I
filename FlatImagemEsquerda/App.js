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
    borderRadius: 50,
  },

  separador: {
    height: 1,
    width: "100%",
    backgroundColor: "#C8C8C8",
  },
});

export default App;
