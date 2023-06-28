import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Lista from './Lista';
import OpMathB from './OpMathB';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function AulaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Olá, teste de navegação</Text>
    </View>
  );
}

function ListaScreen({ navigation }) {
  return (
    <Lista></Lista>
  );
}

function OpMathBScreen({ navigation }) {
  return (
    <OpMathB></OpMathB>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Aula" component={AulaScreen} />
        <Drawer.Screen name="Minha Lista" component={ListaScreen} />
        <Drawer.Screen name="Operações Matemáticas com Botão" component={OpMathBScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
