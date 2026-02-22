import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  name?: keyof typeof MaterialIcons.glyphMap
  title: string
  viewStyle?: ViewStyle
  textStyle?: TextStyle
}

export function Button({ name, title, viewStyle, textStyle, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.container, viewStyle]} {...rest}>
      {name &&
        <MaterialIcons name={name} size={24} style={textStyle} />
      }
      <Text style={[styles.title, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}