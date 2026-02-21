
import { Text, TextInput, TextInputProps, View } from 'react-native'

import { styles } from './styles'

type Props = TextInputProps & {
  placeholder: string
}

export function DiscountInput({ placeholder, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={2}
        {...rest}
      />
      <Text style={styles.percentage}>%</Text>
    </View>
  )
}