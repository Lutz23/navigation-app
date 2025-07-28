import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PropriumButton from '@/components/communis/PropriumButton'
import { Link, router, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'


const DomusScreen = () => {

  const navigation = useNavigation();

  const alternateDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer);
  }

  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>

        <PropriumButton 
         color='primarium'
         onPress={() => router.push('/articuli')}
         className='mb-2' >
          Productos
        </PropriumButton>

        <PropriumButton 
         onPress={() => router.push('/identitatis')}
         color='secundarium'
         className='mb-2' >
          Perfil
        </PropriumButton>



        <PropriumButton 
         onPress={() => router.push('/occasus')}
         color='tertiarium'
         className='mb-2' >
          Ajustes
        </PropriumButton>
        

        <Link href='/articuli' asChild>
          <PropriumButton 
          variant='solum-text'
          color='primarium' 
          className='mb-10'>
          Productos
          </PropriumButton>
        </Link>

        <PropriumButton 
        onPress={ alternateDrawer }
          className='mb-10'>
            Abrir Menú
          </PropriumButton>
        
      

      </View>
    </SafeAreaView>
  )
}

export default DomusScreen;