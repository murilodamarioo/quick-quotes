import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Home } from '@/app/Home'

export type StackRoutesList = {
  home: undefined
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
    </Stack.Navigator>
  )
}

