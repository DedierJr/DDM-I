import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -31.3021158,
          longitude: -54.034425,
          latitudeDelta: 0.1022,
          longitudeDelta: 0.1021,
        }}
        mapType="satellite"
        >
          
          <Marker
            coordinate={{
              latitude:-31.3320000,
              longitude:-54.0718535, }}
            title={"Titulo do Marcador"}
            description={"Aqui vai mais informação"}
          ></Marker>

          <Marker
            coordinate={{
              latitude:-31.3064276,
              longitude:-54.0669209, }}
            title={"Titulo do Marcador"}
            description={"Aqui vai mais informação"}
          ></Marker>

          <Marker
            coordinate={{
              latitude:-31.2680167,
              longitude:-53.9946652, }}
            title={"Titulo do Marcador"}
            description={"Aqui vai mais informação"}
          ></Marker>
                    
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});