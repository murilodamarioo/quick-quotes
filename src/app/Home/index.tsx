import { Text, View } from 'react-native'
import { styles } from './styles'
import { Button } from '@/components/Button'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Orçamentos</Text>
          <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
        </View>

        <Button name='add' title='Novo' />
      </View>
    </View>
  )
}