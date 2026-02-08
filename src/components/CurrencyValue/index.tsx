import { Text } from 'react-native'

import { styles } from './styles'

import { formatCurrency } from '@/utils/currency-utils'

type Sizes = 'small' | 'medium' | 'large'

type Props = {
  value: number
  strong?: boolean;
  size?: Sizes;
}

export function CurrencyValue({
  value,
  strong = false,
  size = "medium",
}: Props) {
  const priceFormated = formatCurrency(value);

  return (
    <Text style={styles.currency}>
      <Text>R$ </Text>
      <Text
        style={[
          styles.currencyValue,
          strong ? styles.valueStrong : styles.valueRegular,
          styles[size],
        ]}
      >
        {priceFormated}
      </Text>
    </Text>
  )
}