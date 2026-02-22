import { Text, TextStyle } from 'react-native'

import { styles } from './styles'

import { formatCurrency } from '@/utils/currency-utils'

type Sizes = 'small' | 'medium' | 'large'

type Props = {
  value: number
  strong?: boolean
  size?: Sizes
  textStyle?: TextStyle
}

export function CurrencyValue({
  value,
  strong = false,
  size = "medium",
  textStyle
}: Props) {
  const priceFormated = formatCurrency(value);

  return (
    <Text style={[styles.currency, textStyle]}>
      <Text>R$ </Text>
      <Text
        style={[
          styles.currencyValue,
          textStyle,
          strong ? styles.valueStrong : styles.valueRegular,
          styles[size],
        ]}
      >
        {priceFormated}
      </Text>
    </Text>
  )
}