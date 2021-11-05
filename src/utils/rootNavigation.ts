import { createRef } from 'react';

export const navigationRef = createRef();

export const navigate = (name: string, params: any) => {
    navigationRef.current?.navigate(name, params);
}

export const replace = (name?: string, params?: any) => {
    navigationRef.current?.reset({
        index: 0,
        routes: [{ name, params }]
    });
}