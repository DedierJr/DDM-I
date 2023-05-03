import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
  Image,
} from "react-native";

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

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const LongClick = (item) => {
    alert("voce pressionou longo o " + item.title);
  };

  const ShortClick = (item) => {
    alert("voce pressionou curto 0 " + item.title);
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={meuestilo.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },
            meuestilo.title,
          ]}
          onLongPress={() => {
            LongClick(item);
          }}
          onPress={() => {
            ShortClick(item);
          }}
        >
          <View>
            <Image
              source={{ uri: item.imageUri }}
              style={meuestilo.itemImage}
              tg
            />
            <Text style={meuestilo.id}>Id: {item.id}</Text>
            <Text style={meuestilo.title}>Nome: {item.nome}</Text>
            <Text style={meuestilo.title}>Title: {item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={meuestilo.container}>
      <FlatList
        data={DATA}
        renderItem={renderItemNovo}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  itemImage: {
    width: 64,
    height: 64,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "#eee",
    borderRadius: 40,
    elevation: 2,
  },
});

export default App;
