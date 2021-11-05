import React, { useState, useEffect, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native'

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider value={{ signed: null }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;