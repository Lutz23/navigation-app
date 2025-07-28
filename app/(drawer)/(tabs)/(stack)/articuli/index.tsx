import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { articuli } from '@/store/articuli.store';
import { Link } from 'expo-router';

const ArticuliScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList 
      data={ articuli } 
      keyExtractor={(item) => item.id }
      renderItem={({item})=> (
        <View className='mt-10'>
          <Text className='text-2xl font-work-black'>{item.titulus} </Text>
          <Text>{item.descriptio}</Text>
          <View className='flex flex-row justify-between mt-2'>
          <Text className='text-xl font-work-medium'>{item.pretium}</Text>
          <Link href={`/articuli/${item.id}`} className='text-primarium'>Ver detalles</Link>
        </View>
        </View> 
       )}
       />

  </View> 
  )
}



export default ArticuliScreen;