import { Text, Pressable, PressableProps, View } from 'react-native'
import React from 'react'
import PropriumButton from '@/components/communis/PropriumButton';


interface Props extends PressableProps {
  children: string;
  color?: 'primarium' | 'secundarium' | 'tertiarium';
  variant?: 'continens' | 'solum-text'
  className?: string;
}

const PropiumButton = React.forwardRef( ({ 
  children, 
  color = 'primarium',
  onPress,
  onLongPress,
  variant = 'continens',
  className
 }: Props, ref: React.Ref<View>) => {


  const btnColor = {
    primarium: 'bg-primarium',
    secundarium: 'bg-secundarium',
    tertiarium: 'bg-tertiarium',
  }[color];
  const textColor = {
    primarium: 'text-primarium',
    secundarium: 'text-secundarium',
    tertiarium: 'text-tertiarium',
  }[color];

  // {a:2, b:5, c:23}[a] => 2
if (variant === 'solum-text') {
  return (
    <Pressable 
    className={`p-3 ${className}`}
    onPress={ onPress }
    onLongPress={ onLongPress}
    ref={ref}>
      <Text className={`text-center ${ textColor } font-work-medium`}>{ children } </Text>
    </Pressable>
    
  )

}


  return (
    <Pressable 
    className={`p-3 rounded-md ${ btnColor } active:opacity-90 ${className}`}
    onPress={ onPress }
    onLongPress={ onLongPress}
    ref={ref}>
      <Text className='text-white text-center font-work-medium'>{ children } </Text>
    </Pressable>
  )
} );

export default PropiumButton