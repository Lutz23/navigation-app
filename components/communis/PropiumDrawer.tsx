import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const PropiumDrawer = ( props: DrawerContentComponentProps) => {

  return (

    <DrawerContentScrollView 
    scrollEnabled={false}
    {...props}>
        <View className='flex justify-center items-center p-10 mx-3 mb-4 h-[150px] rounded-xl bg-primarium'>
        <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
        <Text className='text-primarium font-work-black text-4xl'>LJ</Text>
        </View>
        </View>
        
       <DrawerItemList {...props}/>
      
    </DrawerContentScrollView>
    
  )
}

export default PropiumDrawer