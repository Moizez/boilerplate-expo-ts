import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

import { Provider as StoreProvider } from 'react-redux'
import store from './src/store'
import { colors } from './src/styles/theme.json'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

const App = () => {

	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={colors}>
				<View style={styles.container}>
					<Text>Open up App.js to start working on your app!</Text>
					<StatusBar style="auto" />
				</View>
			</ThemeProvider>
		</StoreProvider>
	);
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
