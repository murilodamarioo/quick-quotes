import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { CurrencyValue } from '../CurrencyValue'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/themes'
import { styles } from './styles'
import { Button } from '../Button'

type Props = TouchableOpacityProps & {
  title: string
  description: string
  price: number
  quantity: number
}

export function Item({ title, description, price, quantity, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {
            description.length > 32 ? description.slice(0, 32) + '...' : description
          }
        </Text>
      </View>
      <View>
        <CurrencyValue value={price} strong />
        <Text style={styles.quantity}>Qt: {quantity}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} {...rest}>
        <MaterialIcons
          name='edit'
          size={20}
          color={colors.PURPULE_BASE}
        />
      </TouchableOpacity>

    </View>
  )
}