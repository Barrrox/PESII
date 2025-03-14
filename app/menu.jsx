import { Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity } from "react-native"
import Botao  from "../assets/componentes/Botao.jsx"

export default function Menu() {
  return (
    <SafeAreaView >
      <Botao texto="Registrar refeição" style={styles.containerBotao} />
      <Botao texto="Botão 2" style={styles.containerBotao}/>
      <Botao texto="Botão 3" style={styles.containerBotao}/>
      <Botao texto="Botão 4" style={styles.containerBotao}/>
      
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container: {
    // Inserir aqui o estilo do container
  },

  containerBotoes:{
    // Inserir
  },

  containerBotao:{
    // Inserir
  },

  header: {
    marginVertical: 36,
  },

  headerImag: {
    width: 80,
    height: 80,
  },

  button: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(136, 22, 22)',
    marginTop: 20,
    

  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    
  },


})