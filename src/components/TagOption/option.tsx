import { Pressable, PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Tag } from '../Tag'

import { TagStatus } from '@/types/TagStatus'
import { colors } from '@/themes'
import { styles } from './styles'

type Props = PressableProps & {
  isSelected: boolean
  status: TagStatus
}

export function Option({
  isSelected,
  status,
  ...rest
}: Props) {
  return (
    <Pressable style={styles.option} {...rest}>
      <MaterialIcons
        name={isSelected ? 'radio-button-checked' : 'radio-button-unchecked'}
        size={20}
        color={isSelected ? colors.PURPULE_BASE : colors.GRAY_400}
      />
      <Tag status={status} />
    </Pressable>
  )
}