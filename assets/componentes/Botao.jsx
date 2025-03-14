import React from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";


const Botao = ({texto}) => {
	return(
			<TouchableOpacity
				onPress={() => {}}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>{texto}</Text>
				</View>
			</TouchableOpacity>
	)
}

const styles = StyleSheet.create(
	{
		button: {
			height: "100%",
			width: 400,
			borderRadius: 20,
			justifyContent: 'center',
			backgroundColor: 'rgb(136, 22, 22)',
			padding: 6,
			marginTop: 20,
			marginBottom: 20,
			flex: 1
		},

		buttonText: {
			color: 'white',
			fontSize: 16,
			fontWeight: 'bold',
			textAlign: 'center',
			padding: 4,
		},
	}
)

export default Botao;