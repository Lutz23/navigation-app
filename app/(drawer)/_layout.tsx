import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import PropiumDrawer from '@/components/communis/PropiumDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <PropiumDrawer {...props} />}
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.2)',
        drawerActiveTintColor: 'indigo',
        //headerShown: false,
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs + Stack',
          headerShown: false,
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="usoris/index"
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="tempore/index"
        options={{
          drawerLabel: 'Horario',
          title: 'Horario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
