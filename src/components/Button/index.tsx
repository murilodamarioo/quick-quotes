import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap
  title: string
}

export function Button({ name, title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons name={name} size={24} style={styles.icon}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}