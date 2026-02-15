import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

import { TagStatus } from '@/types/TagStatus'

import { colors } from '@/themes'
import { Tag } from '../Tag'


type Props = TouchableOpacityProps & {
  title: string
  tagStatus?: TagStatus
}

export function PageHeader({ title, tagStatus, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton} {...rest}>
        <MaterialIcons
          name='chevron-left'
          size={24}
          color={colors.GRAY_600}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {tagStatus &&
        <Tag status={tagStatus} />
      }
    </View>
  )
}