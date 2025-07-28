import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = ( canGoBack: boolean | undefined ) => {
        if (canGoBack) {
            router.back();
            return;
        }
        navigation.dispatch( DrawerActions.toggleDrawer);
    }

  return (
    <Stack
        screenOptions={
            {
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({tintColor, canGoBack }) => (
                    <Ionicons
                    name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                    size={20}
                    className='mr-5'
                    onPress={ () => onHeaderLeftClick(canGoBack)}/>

                )
            }
        }>


        <Stack.Screen
        name="domus/index"
        options={{
            title: 'Inicio'
        }}
        />

        <Stack.Screen
        name="articuli/index"
        options={{
            title: 'Productos'
        }}
        />

        <Stack.Screen
        name="identitati/index"
        options={{
            title: 'Perfil'
        }}
        />

        <Stack.Screen
        name="occasus/index"
        options={{
            title: 'Ajustes'
        }}
        />  

    </Stack>
  )
}

export default StackLayout;