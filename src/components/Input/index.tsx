import { MaterialIcons } from '@expo/vector-icons'

import { TextInput, TextInputProps, View } from 'react-native'

import { styles } from './styles'
import { colors } from '@/themes'

type Props = TextInputProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
  placeholder?: string
}

export function Input({ icon, placeholder, ...rest }: Props) {
  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.icon}>
          <MaterialIcons name={icon} size={24} color={colors.GRAY_500} />
        </View>
      )}

      <TextInput
        style={[styles.input, icon ? styles.withIcon : styles.noIcon]}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  )
}