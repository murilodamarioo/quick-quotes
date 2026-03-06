import { TextInput, TextInputProps, View } from 'react-native'

import { styles } from './styles'

type Props = TextInputProps & {}

export function Textarea({ ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.input}
        {...rest}
      />
    </View>
  )
}