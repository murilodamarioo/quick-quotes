import { Pressable, PressableProps, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

import { colors } from '@/themes'

type Props = PressableProps & {
  selected?: boolean
  value: string
}

export function OrderingFilterRadio({ selected = false, value, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons
        name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
        size={20}
        color={selected ? colors.PURPLE_BASE : colors.GRAY_400}
      />
      <Text style={styles.value}>{value}</Text>
    </Pressable>
  )
}