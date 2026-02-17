import { AntDesign } from '@expo/vector-icons'

import { Text, View, ViewStyle } from 'react-native'

import { styles } from './styles'

import { colors } from '@/themes'

type Props = {
  title: string
  icon: keyof typeof AntDesign.glyphMap
  children?: React.ReactNode
  style?: ViewStyle
}

export function BudgetContent({ icon, title, children, style }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          size={16}
          name={icon}
          color={colors.PURPULE_BASE}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.content, style]}>
        {children}
      </View>
    </View>
  )
}