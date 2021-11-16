import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';
import ProfileEdit from '../screens/ProfileEdit';

const Stack = createStackNavigator()

const AppRoutes = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
        </Stack.Navigator>
    )
}

export default AppRoutes