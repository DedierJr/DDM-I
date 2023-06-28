import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Mapa from './Mapa';
import Avaliacao from './Avaliacao';

function MapaScreen({ navigation }) {
  return (
    <Mapa></Mapa>
  );
}

function AvaliacaoScreen({ navigation }) {
  return (
    <Avaliacao></Avaliacao>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Mapa">
        <Drawer.Screen name="Mapa" component={MapaScreen} />
        <Drawer.Screen name="Avaliacao" component={AvaliacaoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}