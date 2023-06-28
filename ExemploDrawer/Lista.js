import React, { useState} from 'react';
import {SafeAreaView,Text,StyleSheet,View,FlatList,Image, Pressable
} from 'react-native';

const Lista = () => {

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Primeiro Item',
      nome: 'Primeiro Nome',
      imageUri:'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Segundo Item',
      nome: 'Segundo Nome',
      imageUri:'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Terceiro Item',
      nome: 'Terceito Nome',
      imageUri:'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Quarto Item',
      nome: 'Quarto Nome',
      imageUri:'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Quinto Item',
      nome: 'Quinto Nome',
      imageUri:'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp'
    },
  ];

const ItemSeparatorView = () => {
    return (
        // Flat List Item Separator
        <View style={styles.separador}/>
    );
};
const LongClick=(item)=>{
  alert('voce pressionou longo e '+ item.title);
 }

 const ShortClick=(item)=>{
  alert('voce pressionou curto e '+ item.title);
 }

const renderItemNovo = ({ item })=> {
  return <View style={styles.item} key={item.id}>
      <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? '#f1f1f1' : 'transparent' }, styles.title]}
          onLongPress={() => { LongClick(item) }}
          onPress={() => { ShortClick(item) }}
      >
          
          <View style={styles.alinhamentoLinha}>        
        <Image style={styles.image} source={{uri: item.imageUri}} />
        
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
}

return (
    <SafeAreaView style={styles.containerSafeArea}>
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={renderItemNovo}
            />
        </View>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
containerSafeArea:{
    flex: 1 
},
container: {
    backgroundColor: 'white',
    marginRight:10,
    marginLeft:10,
},
itemStyle: {
    fontSize: 14,
    padding:5,    
},
alinhamentoLinha:{
    flexDirection:'row', 
    justifyContent: 'flex-start'
},
alinhamentoColuna:{
    flexDirection:'column', 
    justifyContent: 'flex-start'
},
image:{
    height:50,
    width:50, 
    alignSelf:'center'
},

separador:{
    height: 1,
    width: '100%',
    backgroundColor: '#C8C8C8',
}

});

export default Lista;