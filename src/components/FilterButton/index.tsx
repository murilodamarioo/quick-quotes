import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

import { colors } from '@/themes'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
}

export function FilterButton({ icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={24}
        color={colors.PURPULE_BASE}
      />
    </TouchableOpacity>
  )
}