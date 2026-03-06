import { Pressable, TextInput, TextInputProps, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { colors } from '@/themes'

type Props = TextInputProps & {
  value: string
  onChangeText: (value: string) => void
}

export function QuantityInput({ value = '0', onChangeText, ...rest }: Props) {
  const handleIncrement = () => {
    const newValue = String(Number(value || '0') + 1)
    onChangeText(newValue)
  }

  const handleDecrement = () => {
    const newValue = Math.max(Number(value || '0') - 1, 0)
    onChangeText(String(newValue))
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleDecrement}>
        <MaterialIcons
          name='remove'
          size={20}
          color={colors.PURPLE_BASE}
        />
      </Pressable>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={value}
        maxLength={2}
        onChangeText={onChangeText}
        {...rest}
      />
      <Pressable onPress={handleIncrement}>
        <MaterialIcons
          name='add'
          size={20}
          color={colors.PURPLE_BASE}
        />
      </Pressable>
    </View>
  )
}