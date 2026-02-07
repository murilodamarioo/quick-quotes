import { MaterialIcons } from '@expo/vector-icons'

import { TextInput, TextInputProps, View } from 'react-native'

import { styles } from './styles'
import { colors } from '@/themes'

type Props = TextInputProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
  placeholder: string
}

export function Input({ icon, placeholder, ...rest }: Props) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={colors.GRAY_500}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  )
}