import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { CurrencyValue } from '../CurrencyValue'

import { styles } from './styles'

import { colors } from '@/themes'

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
          color={colors.PURPLE_BASE}
        />
      </TouchableOpacity>

    </View>
  )
}