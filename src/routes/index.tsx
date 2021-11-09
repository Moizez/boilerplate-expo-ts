import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../utils/rootNavigation'
import { GlobalState } from '../utils/types'
import { useSelector } from 'react-redux'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes = () => {

    const { signed, onboard } = useSelector((state: GlobalState) => state.auth);

    return (
        <NavigationContainer ref={navigationRef}>
            {signed ? <AppRoutes /> : <AuthRoutes initialRoute={onboard} />}
        </NavigationContainer>
    )
}

export default Routes