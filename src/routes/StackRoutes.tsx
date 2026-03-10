import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Home } from '@/app/Home'
import { Budget } from '@/app/Budget'
import { Details } from '@/app/Details'

export type StackRoutesList = {
  home: undefined
  budget: undefined | { id: string }
  details: undefined | { id: string }
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
      <Stack.Screen name="budget" component={Budget} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  )
}

