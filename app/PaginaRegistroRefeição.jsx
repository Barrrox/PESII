import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState } from 'react-native'
import { supabase } from "../supabase/supabase.jsx"
import { Button, Input } from '@rneui/themed'

// Referência: https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native#create-a-project

/* 

Tells Supabase Auth to continuously refresh the session automatically if the app is in the foreground. When this is added, you will continue to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event if the user's session is terminated. This should only be registered once.
*/
AppState.addEventListener('change', (state) => {
	if (state === 'active') {
		supabase.auth.startAutoRefresh()
	} else {
		supabase.auth.stopAutoRefresh()
	}
})

export default function PaginaRegistroRefeicao(){
	const [nomeRefeicao, setNomeRefeicao] = useState("");
	const [Peso, setPeso] = useState(0);
	const [loading, setLoading] = useState(false); // ainda n sei pra que serve

	// funcao que vai ser chamada quando o botao de Registrar for acionado
	async function handleRegistroRefeicao() {
		setLoading(true);
		const { error } = await supabase
			.from('Refeições')
			.insert({
			alimento: nomeRefeicao,
			peso: Peso,
		})

		if (error) Alert.alert('Erro')
		else Alert.alert('Refeição registrada com sucesso!')
		setLoading(false)
	}

	// funcao que vai ser chamada quando o botao de Mostrar itens for acionado
	async function buscarDados() {
		setLoading(true);
		const { data, error } = await supabase
			.from('Refeições')
			.select()

		console.log(data)

		if (error) Alert.alert('Erro')
		else Alert.alert('Refeição registrada com sucesso!')
		setLoading(false)
	}

	// front end
	return (
		<View style={styles.container}>
			<View style={[styles.verticallySpaced, styles.mt20]}>
				<Input
					label="Refeição"
					leftIcon={{ type: 'font-awesome', name: 'Inserir' }}

					onChangeText={(text) => setNomeRefeicao(text)}
					value={nomeRefeicao}
					placeholder="Insira o nome do alimento"
					autoCapitalize={"characters"}
				/>
			</View>
			<View style={styles.verticallySpaced}>
				<Input
					label="Peso"
					leftIcon={{ type: 'font-awesome', name: 'Inserir' }}
					onChangeText={(text) => setPeso(text)}
					value={Peso}
					placeholder="Peso"
					autoCapitalize={'none'}
				/>
			</View>
			<View style={[styles.verticallySpaced, styles.mt20]}>
				<Button title="Registrar" disabled={loading} onPress={() => handleRegistroRefeicao()} />
			</View>

			<View style={[styles.verticallySpaced, styles.mt20]}>
				<Button title="Mostrar itens" disabled={loading} onPress={() => buscarDados()} />
			</View>
			
		</View>
	)

	
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		padding: 12,
	},
	verticallySpaced: {
		paddingTop: 4,
		paddingBottom: 4,
		alignSelf: 'stretch',
	},
	mt20: {
		marginTop: 20,
	},
})