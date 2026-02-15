import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity, ViewStyle } from 'react-native'

import { styles } from './styles'
import { colors } from '@/themes'

type Props = {
  isSelected: boolean
  children: React.ReactNode
}

export function RadioButton({ isSelected, children }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialIcons
        name={isSelected ? 'radio-button-checked' : 'radio-button-unchecked'}
        color={isSelected ? colors.PURPULE_BASE : colors.GRAY_400}
        size={20}
      />
      {children}
    </TouchableOpacity>
  )
}