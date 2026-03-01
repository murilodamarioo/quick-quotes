import { TextInput, View } from 'react-native'

import { styles } from './styles'

export function Textarea() {
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.input}
      />
    </View>
  )
}