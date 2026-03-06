import { Pressable, TextInput, TextInputProps, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

import { colors } from '@/themes'

type Props = TextInputProps & {}

export function QuantityInput({ ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Pressable>
        <MaterialIcons
          name='remove'
          size={20}
          color={colors.PURPLE_BASE}
        />
      </Pressable>
      <TextInput
        keyboardType='numeric'
        {...rest}
      />
      <Pressable>
        <MaterialIcons
          name='add'
          size={20}
          color={colors.PURPLE_BASE}
        />
      </Pressable>
    </View>
  )
}