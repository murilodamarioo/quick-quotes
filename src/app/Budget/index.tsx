import { PageHeader } from '@/components/PageHeader'
import { TagStatus } from '@/types/TagStatus'
import { View } from 'react-native'
import { styles } from './styles'
import { StackRoutesProps } from '@/routes/StackRoutes'

export function Budget() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PageHeader title='Orçamento' tagStatus={TagStatus.SENT} />
      </View>
    </View>
  )
}