import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, PressableProps } from 'react-native'

import { Tag } from '../Tag'

import { styles } from './styles'

import { TagStatus } from '@/types/TagStatus'
import { colors } from '@/themes'

type Props = PressableProps & {
  checked: boolean,
  status: TagStatus
  onToggle: () => void
}

export function StatusFilterCheckbox({ checked, status, onToggle, ...rest }: Props) {
  return (
    <Pressable style={styles.container} onPress={onToggle} {...rest}>
      <MaterialIcons
        name={checked ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={checked ? colors.PURPLE_BASE : colors.GRAY_400}
      />
      <Tag status={status} />
    </Pressable>
  )
}