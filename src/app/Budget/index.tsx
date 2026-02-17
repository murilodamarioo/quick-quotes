import { useState } from 'react'
import { View, ScrollView } from 'react-native'

import { styles } from './styles'

import { Item } from '@/components/Item'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { TagOption } from '@/components/TagOption'
import { PageHeader } from '@/components/PageHeader'
import { BudgetContent } from '@/components/BudgetContent'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { TagStatus } from '@/types/TagStatus'
import { colors } from '@/themes'


export function Budget({ navigation }: StackRoutesProps<'new_budget'>) {
  const [tagType, setTagType] = useState(TagStatus.DRAW)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

          <BudgetContent style={{ paddingHorizontal: 20 }} icon='file-text' title='Serviços inclusos'>
            <View style={styles.items}>
              <Item
                title='Design de interfaces'
                description='Criação de wireframes e protótipos de alta fidelidade'
                quantity={1}
                price={100}
              />
              <Item
                title='Design de interfaces'
                description='Criação de wireframes e protótipos de alta fidelidade'
                quantity={1}
                price={100}
              />

              <Button
                name='add'
                title='Adicionar serviço'
                onPress={() => console.log('Adicionar serviço')}
                viewStyle={{
                  backgroundColor: colors.GRAY_100,
                  borderWidth: 1,
                  borderColor: colors.GRAY_300
                }}
                textStyle={{ color: colors.PURPULE_BASE }}
              />
            </View>
          </BudgetContent>

          <BudgetContent icon='credit-card' title='Investimento'>
          </BudgetContent>
        </View>
      </View>
    </ScrollView>
  )
}