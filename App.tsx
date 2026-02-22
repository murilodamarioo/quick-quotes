import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'

import { Routes } from '@/routes'
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  )
}

