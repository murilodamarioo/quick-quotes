import { Text, View } from 'react-native'
import { styles } from './styles'

import Input, { CurrencyInputProps } from 'react-native-currency-input'

type Props = CurrencyInputProps & {}

export function CurrencyInput({ ...rest }: Props) {

  return (
    <View style={styles.container} >
      <Text style={styles.label}>R$</Text>
      <Input
        style={styles.input}
        delimiter='.'
        separator=','
        precision={2}
        minValue={0}
        {...rest}
      />
    </View>
  )
}