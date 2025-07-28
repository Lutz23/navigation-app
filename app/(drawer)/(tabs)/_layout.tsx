import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'indigo',
        headerShown: false,
        // tabBarShowLabel: false
        // tabBarStyle: {
            // backgroundColor: 'black'
        //},
        //tabBarActiveBackgroundColor: 'pink'

      }}> 

        <Tabs.Screen
          name="(stack)"
          options={{
            title: 'Stack',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
          }}
        />

        <Tabs.Screen
          name="taxatio/index"
          options={{
            title: 'Análisis',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="stats-chart-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="electi/index"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
          }}
        />
      </Tabs>
  )
}

export default TabsLayout;