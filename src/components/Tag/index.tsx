import { View, Text, ViewProps } from 'react-native'
import { styles, getTagConfig } from './styles'
import { TagStatus } from '@/types/TagStatus'

type Props = ViewProps & {
  status: TagStatus
}

export function Tag({ status }: Props) {
  const tagConfig = getTagConfig(status)

  return (
    <View style={[styles.container, tagConfig.containerStyle]}>
      <Text style={tagConfig.dotStyle}>●</Text>
      <Text style={[styles.title, tagConfig.textStyle]}>
        {tagConfig.text}
      </Text>
    </View>
  )
}