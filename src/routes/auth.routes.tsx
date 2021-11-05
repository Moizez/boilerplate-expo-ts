import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Tour from '../screens/Tour';

const Stack = createStackNavigator()

const AuthRoutes = () => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn' >
            <Stack.Screen name='Tour' component={Tour} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthRoutes