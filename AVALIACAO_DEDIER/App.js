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
  const [qtd_refri, setRefri] = useState("");
  const [qtd_salgado, setSalgado] = useState("");
  var refri = qtd_refri * 4.3;
  var salgado = qtd_salgado * 5.25;

  const calcular = (item) => {
    if (item.id === "item1") {
      total = refri + salgado;
      alert("Total: R$" + total);
      Speech.speak("Total: R$" + total);
    }
    if (item.id === "item2") {
      total = (refri + salgado) * 0.93;
      alert("Total: R$" + total.toFixed(2));
      Speech.speak("Total: R$" + total);
    }
    if (item.id === "item3") {
      total = (refri + salgado) * 1.07;
      alert("Total: R$" + total.toFixed(2));
      Speech.speak("Total: R$" + total);
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
      title: "Pix",
      imageUri:
        "https://cdn.icon-icons.com/icons2/3245/PNG/512/pix_icon_198027.png",
    },
    {
      id: "item2",
      title: "Dinheiro",
      imageUri: "https://cdn-icons-png.flaticon.com/512/4578/4578534.png",
    },
    {
      id: "item3",
      title: "Cartão",
      imageUri:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAAnJye/v7/o6Og4ODh0dHTPz88TExOenp60tLT5+fmWlpYbGxsMDAwwMDDe3t7IyMjp6env7+9bW1uCgoJKSkp4eHiysrI8PDyOjo5nZ2dFRUViYmKYmJjU1NShoaEkJCRUVFQB6RzgAAAEDUlEQVR4nO2d63aqMBBGKUSrIkhEwGBR7Ps/5NHTNoliSxQWYcK3f7Viu2avXIk443kAAAAAAAAAAAAAAAAAAAAAAGBGyE48GC/8xMIudrwuiyoX/ngReVWUNX/JMgyy3Sx+o0A822XBs5JpJiLbgT9FJLL0CT9W2Q74JQ7M0C/JbIf6MpmJY1pvbMfZgU3d2lf53HaQHZm//y24F7Yj7IzY/yW4XtiOrwcW61/9wgdTTFSVK55s2RjZJnxVVg9WteyXxTFtDEGxf2aNsUXaHFrzh3Gnxc2bYlFuh471ZbaluN1+PVr+77pofqTjd2V7zG/iL5sd9XgzWMvEQpTdSMqbafJ4f32lX/1Y2QixM6sPXeLOgZ31cXqyE2FnTvpc6d/u4A7apYLWCNTZ6rPlQb9SazPRb4sJCfT5Mq7V60ybhwrKghdFrRVz1U9L9WpFW/CiqN3blj8vnlQT+vRWiXsSXzXi95QZakthYDe6XgiUzvGrRyaqCeeWg+sHtTDkX11SOcf0++iVRK0M//tkqpSP1KeZL7Rhd7juwBP568aNJrwoqaOmq9Je/rZ0owkvjbiUTnt9/Yi47ch6g8sb/8v6Hqo+a3qgOn6YmltCj6l5xnZcPaLmGqaGYfTnKRwx9rKb7j25Gf9oOUolxbu8Gc68TzkmKZyrmZLK+XPnzX5+LGxH1SvyJmrmRao5XUIOvsiTe7iy/c8IIW95Y8/JxcLz1tJLGsZ5MXeHIo+bhi587KRYPDCk9WRCGxEMyQND+sCQPjCkDwzpA0P6wJA+0zT0NzOH8JuGizl/dwdeLJqGte3Do16pHxgubQfVK0sYkgeG9IEhfWBIHxjSB4b0gSF9YEgfGNIHhvSBIX1gSB9Dw9CI4cM3wNAwN/iwZjPO77sZGhplqtkNH74BMPwGhjC0CAy/cd/wbGL4OXz4BhgaLtcGjPNLfdiX0geG9IEhfWBIH0PDVX8PCw79RXFDQ9Hb45750F/273PnbcR56Kwigxv6MIQhDGE4WcNzb4aLkRquV70xdA4q7EvpA0P6wJA+MKTPJA3ffq/sQRGVwHsC+drcz7nnft5E93Nfup+/1P0ctO7nEXY/F7T7+bzdz8k+gbz67tdGcL++xQRqlLhfZ8b9WkETqPc0gZpd7tddm0DtPI/52iVH6h/eNZTzNSwnUIfUC0v9Orlasqy9lqyX3pbLda8e8OVtrtd0JlqXe/dEXW7P/drqF5oNTg7RcirKG4ORGPPWg+207u9Zr+HZ1CZzI3sw4RAhMz3yZYf2fzZCnjrS3maCVm7oSGTPblDCINvNaCwei9kuC166qw15XRZVLvzxIvKqKGveZesVshMPxgs/McpHEgAAAAAAAAAAAAAAAAAAAACAYfkH/it/WxwlglIAAAAASUVORK5CYII=",
    },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Refri R$4,30 qtd"
        keyboardType="numeric"
        onChangeText={(qtd_refri) => setRefri(qtd_refri)}
        value={qtd_refri}
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="Salgado R$5,25 qtd"
        keyboardType="numeric"
        onChangeText={(qtd_salgado) => setSalgado(qtd_salgado)}
        value={qtd_salgado}
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
