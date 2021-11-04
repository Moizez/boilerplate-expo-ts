import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/components/SplashScreen';

import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import store from './src/store'
import { colors } from './src/styles/theme.json'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import SignIn from './src/screens/SignIn';

const App = () => {

	let [fontsLoaded] = useFonts({
		Inter_900Black,
	});

	if (!fontsLoaded) {
		return <SplashScreen />;
	} else {
		return (
			<StoreProvider store={store}>
				<ThemeProvider theme={colors}>
					<PaperProvider>
						<SignIn />
					</PaperProvider>
				</ThemeProvider>
			</StoreProvider>
		);
	}
}

export default App
