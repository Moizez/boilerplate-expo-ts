import React, { useState } from 'react';
import {StatusBar} from 'react-native'
import { ThemeProvider } from 'styled-components/native';
import SplashScreen from './src/components/SplashScreen';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import { store, persistor } from './src/store'
import { colors } from './src/styles/theme.json'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import Routes from './src/routes';

const App = () => {

	const [wait, setWait] = useState(false)

	let [fontsLoaded] = useFonts({
		Inter_900Black,
	});

	setTimeout(() => {
		setWait(true)
	}, 1000);

	if (!fontsLoaded || !wait) {
		return <SplashScreen />;
	} else {
		return (
			<StoreProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={colors}>
						<PaperProvider>
							<StatusBar backgroundColor={colors.light} barStyle='dark-content'/>
							<Routes />
						</PaperProvider>
					</ThemeProvider>
				</PersistGate>
			</StoreProvider>
		);
	}
}

export default App
