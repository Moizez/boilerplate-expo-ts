import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import store from './src/store'
import { colors } from './src/styles/theme.json'
import { LogBox } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

LogBox.ignoreAllLogs()

const App = () => {

	let [fontsLoaded] = useFonts({
		Inter_900Black,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<StoreProvider store={store}>
				<ThemeProvider theme={colors}>
					<PaperProvider>
						<View style={styles.container}>
							<Text>Open up App.js to start working on your app!</Text>
							<StatusBar style="auto" />
						</View>
					</PaperProvider>
				</ThemeProvider>
			</StoreProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App
