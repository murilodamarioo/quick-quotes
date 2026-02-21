import { View } from 'react-native'

import { styles } from './styles'

import { TagStatus } from '@/types/TagStatus'
import { Option } from './option'

type Props = {
  selected: TagStatus
  onChange: (status: TagStatus) => void
}

export function TagOption({ selected, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Option
        isSelected={selected === TagStatus.DRAW}
        status={TagStatus.DRAW}
        onPress={() => onChange(TagStatus.DRAW)}
      />
      <Option
        isSelected={selected === TagStatus.APPROVED}
        status={TagStatus.APPROVED}
        onPress={() => onChange(TagStatus.APPROVED)}
      />
      <Option
        isSelected={selected === TagStatus.SENT}
        status={TagStatus.SENT}
        onPress={() => onChange(TagStatus.SENT)}
      />
      <Option
        isSelected={selected === TagStatus.REJECTED}
        status={TagStatus.REJECTED}
        onPress={() => onChange(TagStatus.REJECTED)}
      />
    </View>
  )
}