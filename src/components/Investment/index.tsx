import { Text, View } from 'react-native'

import { styles } from './style'

import { CurrencyValue } from '../CurrencyValue'
import { DiscountInput } from '../DiscountInput'

import { colors } from '@/themes'

export type InvestmentsProps = {
  subtotal: number
  quantity: number
  discountPercentage: number
}

type Props = {
  data: InvestmentsProps
  onDiscountChange: (value: number) => void
}

export function Investment({ data, onDiscountChange }: Props) {

  const discountAmount = data.subtotal * (data.discountPercentage / 100)
  const total = data.subtotal - discountAmount

  const handleDiscountChange = (text: string) => {
    const parsed = parseFloat(text.replace(/[^0-9.]/g, '')) || 0
    onDiscountChange(parsed)
  }

  return (
    <View style={styles.container}>
      <View style={styles.subtotal}>
        <Text style={styles.label}>Subtotal</Text>
        <View style={styles.values}>
          <Text style={styles.quantity}>
            {data.quantity} {data.quantity > 1 ? 'itens' : 'item'}
          </Text>
          <CurrencyValue value={data.subtotal} size="small" />
        </View>
      </View>

      <View style={styles.discount}>
        <View style={styles.discountItems}>
          <Text style={styles.label}>Desconto</Text>
          <DiscountInput
            placeholder='1'
            value={data.discountPercentage.toString()}
            onChangeText={handleDiscountChange}
            keyboardType="numeric"
          />
        </View>

        {data.discountPercentage > 0 &&
          <View style={styles.discountValue}>
            <Text style={styles.minus}>-</Text>
            <CurrencyValue
              textStyle={{ color: colors.DANGER_BASE }}
              value={discountAmount}
              size="small"
            />
          </View>
        }
      </View>

      <View style={styles.total}>
        <Text style={styles.labelTotal}>Valor total</Text>
        <View>
          {data.discountPercentage > 0 &&
            <CurrencyValue
              textStyle={{ textDecorationLine: 'line-through', color: colors.GRAY_600 }}
              value={data.subtotal}
              size="small"
            />
          }
          <CurrencyValue value={total} strong size="large" />
        </View>
      </View>
    </View>
  )
}