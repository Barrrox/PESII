import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";

import Logo from "@/assets/images/comidaQuenteLogo.png"

export default function PaginaLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // necessario para utilização do navigate na logica do login
  navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <Image
          source={Logo}
          style={styles.logo}/>
        
        <View style={styles.formInputWrapper}>
          <Octicons name="person" size={20} color="rgb(136,22,22)" />
          <TextInput
            cursorColor={"rgb(136,22,22)"}
            style={styles.input}
            value={username}
            onChangeText={(username) => setUsername(username)}
            placeholder="Usuario"
          />
        </View>
  
        <View style={styles.formInputWrapper}>
          <Octicons name="shield-lock" size={20} color="rgb(136,22,22)" />
          <TextInput
            cursorColor={"rgb(136,22,22)"}
            style={styles.input}
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            placeholder="Senha"
          />
        </View>
  
        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
               if (username === "admin" && password === "admin") {
                 navigation.navigate("PaginaRegistroRefeicao")
               } else {
                 alert("Erro. Senha inválida")
               }
              // navigation.navigate("PaginaRegistroRefeicao")
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  formInputWrapper: {
    width: "90%",
    height: "10%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    marginTop: 20,
  },

  input: {
    width: "100%",
    height: "100%",
    marginLeft: 10,
  },

  button: {
    height: 50,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(136, 22, 22)',
    padding: 6,
    marginTop: 20,
    
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },

  logo: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    resizeMode:'cover',
    
    
  },
});
