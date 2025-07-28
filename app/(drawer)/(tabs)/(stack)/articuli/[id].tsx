

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { articuli } from '@/store/articuli.store';

const ArticulusScreen = () => {

    const {id} = useLocalSearchParams();

    const navigation = useNavigation();

    const articulus = articuli.find( a => a.id === id);

   useEffect( () => {
            navigation.setOptions({
            title: articulus?.titulus ?? 'Producto'
       })

    }, [articulus])

    if ( !articulus ) {
        return <Redirect href='/' />
    }

    

  return (
    <View className='px-5 mt-2'>
      <Text className='text-2xl font-work-black'>{articulus.titulus}</Text>
      <Text>{articulus.descriptio}</Text>
      <Text className='text-xl font-work-black'>{articulus.pretium}</Text>
    </View>
  )

}

export default ArticulusScreen;