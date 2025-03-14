import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import PaginaLogin from "./PaginaLogin.jsx";
import PaginaRegistroRefeicao from "./PaginaRegistroRefeição.jsx";
import Menu from "./menu.jsx"

import Logo from "@/assets/images/favicon.png";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootLayout from "./_layout.jsx";


// Codigo Barros

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: 'rgb(136,22,22)'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'},}}>
        <Stack.Screen name="Login" component={PaginaLogin} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="PaginaRegistroRefeicao" component={PaginaRegistroRefeicao} />
      </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  
});
