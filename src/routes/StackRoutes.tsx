import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Home } from '@/app/Home'
import { Budget } from '@/app/Budget'

export type StackRoutesList = {
  home: undefined
  new_budget: undefined
}

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="new_budget" component={Budget} />
    </Stack.Navigator>
  )
}

