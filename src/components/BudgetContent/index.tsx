import { AntDesign } from '@expo/vector-icons'

import { Text, View } from 'react-native'

import { styles } from './styles'

import { colors } from '@/themes'

type Props = {
  title: string
  icon: keyof typeof AntDesign.glyphMap
  children?: React.ReactNode
}

export function BudgetContent({ icon, title, children }: Props) {
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
      <View style={styles.content}>
        {children}
      </View>
    </View>
  )
}