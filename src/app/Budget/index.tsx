import { useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { Input } from '@/components/Input'
import { TagOption } from '@/components/TagOption'
import { PageHeader } from '@/components/PageHeader'
import { BudgetContent } from '@/components/BudgetContent'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { TagStatus } from '@/types/TagStatus'

export function Budget({ navigation }: StackRoutesProps<'new_budget'>) {
  const [tagType, setTagType] = useState(TagStatus.DRAW)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PageHeader
          title="Orçamento" tagStatus={TagStatus.SENT}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.content}>
        <BudgetContent icon="home" title="Informacões gerais">
          <View style={styles.form}>
            <Input placeholder="Título" />
            <Input placeholder="Cliente" />
          </View>
        </BudgetContent>

        <BudgetContent icon="tag" title="Status">
          <TagOption
            selected={tagType}
            onChange={setTagType}
          />
        </BudgetContent>

        <BudgetContent icon='file-text' title='Serviços inclusos'>

        </BudgetContent>
      </View>
    </View>
  )
}