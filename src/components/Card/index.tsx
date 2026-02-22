import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import { styles } from './styles'
import { Tag } from '../Tag'
import { TagStatus } from '@/types/TagStatus'
import { CurrencyValue } from '../CurrencyValue'

type Props = TouchableOpacityProps & {
  title: string
  client: string
  status: TagStatus
  price: number
}

export function Card({ title, client, status, price, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5} {...rest}>

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.client} numberOfLines={1}>{client}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Tag status={status} />
        <CurrencyValue value={price} size='large' strong />
      </View>

    </TouchableOpacity>
  );
}