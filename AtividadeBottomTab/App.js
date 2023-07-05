import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import OpMath from './OpMath';
import Avaliacao from './Avaliacao';
import Mapa from './Mapa';

function OpMathScreen() {
  return (
    <OpMath></OpMath>
  );
}

function IfsulScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>IFSUL!</Text>
    </View>
  );
}

function AvaliacaoScreen() {
  return (
    <View>
      <Avaliacao></Avaliacao>
    </View>
  );
}

function MapaScreen() {
  return (
      <Mapa></Mapa>
  );
}

const Tab = createBottomTabNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="OpMath" component={OpMathScreen} 
        options={{
          tabBarIcon: () => (<Image source={require("./assets/math.png")} 
          style={{width: 20, height: 20}} />)
      }}/>
        <Tab.Screen name="Ifsul" component={IfsulScreen} 
        options={{
          tabBarIcon: () => (<Image source={require("./assets/IFSUL.png")} 
          style={{width: 20, height: 20}} />)
      }}/>
      <Tab.Screen name="Flatlist" component={AvaliacaoScreen} 
        options={{
        tabBarIcon: () => (<Icon name="earth-outline" size={30}  />)
      }}/>
      <Tab.Screen name="Mapa" component={MapaScreen} 
        options={{
        tabBarIcon: () => (<Icon name="location-outline" size={30}  />)
      }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}