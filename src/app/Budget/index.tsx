import { useState } from 'react'
import { View, ScrollView } from 'react-native'


import { styles } from './styles'

import { Item } from '@/components/Item'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { TagOption } from '@/components/TagOption'
import { PageHeader } from '@/components/PageHeader'
import { Investment } from '@/components/Investment'
import { BudgetContent } from '@/components/BudgetContent'
import { ServiceModal } from '@/components/ServiceModal'

import { ServiceProps } from '@/components/ServiceModal'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { TagStatus } from '@/types/TagStatus'

import { colors } from '@/themes'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Budget({ navigation }: StackRoutesProps<'new_budget'>) {
  const [tagType, setTagType] = useState(TagStatus.DRAW)
  const [discountPercentage, setDiscountPercentage] = useState(0)

  const data = {
    subtotal: 3847.5,
    quantity: 10,
    discountPercentage
  }

  const [services, setServices] = useState<ServiceProps[]>([])
  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false)

  const initialFormValue = {
    id: undefined,
    title: '',
    description: '',
    price: 0,
    quantity: 1,
  }

  const [serviceForm, setServiceForm] = useState<ServiceProps>(initialFormValue)

  function handleOpenServiceModal() {
    setServiceForm(initialFormValue)
    setIsServiceModalVisible(true)
  }

  function handleSaveService() {
    if (!serviceForm.title.trim()) return

    const newService = { ...serviceForm, id: String(new Date().getTime()) }

    setServices(prev => [...prev, newService])
    setIsServiceModalVisible(false)
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.WHITE }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <PageHeader
              title='Orçamento'
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.content}>
            <BudgetContent icon='home' title='Informações gerais'>
              <View style={styles.form}>
                <Input placeholder='Título' />
                <Input placeholder='Cliente' />
              </View>
            </BudgetContent>


            <BudgetContent icon='tag' title='Status'>
              <TagOption selected={tagType} onChange={setTagType} />
            </BudgetContent>

            <BudgetContent style={{ paddingHorizontal: 20 }} icon='file-text' title='Serviços inclusos'>
              <View style={styles.items}>
                {services.map((service, idx) => (
                  <Item
                    key={idx}
                    title={service.title}
                    description={service.description}
                    quantity={service.quantity}
                    price={service.price}
                  />
                ))}
                <Button
                  name='add'
                  title='Adicionar serviço'
                  onPress={handleOpenServiceModal}
                  viewStyle={{
                    backgroundColor: colors.GRAY_100,
                    borderWidth: 1,
                    borderColor: colors.GRAY_300
                  }}
                  textStyle={{ color: colors.PURPLE_BASE }}
                />
              </View>
            </BudgetContent>

            <BudgetContent icon='credit-card' title='Investimento'>
              <Investment
                onDiscountChange={setDiscountPercentage}
                data={data}
              />
            </BudgetContent>
          </View>

          <View style={styles.footer}>
            <Button
              title='Cancelar'
              onPress={() => navigation.goBack()}
              viewStyle={{
                backgroundColor: colors.GRAY_100,
                borderWidth: 1,
                borderColor: colors.GRAY_300
              }}
              textStyle={{ color: colors.PURPLE_BASE }}
            />

            <Button
              title='Salvar'
              name='check'
              onPress={() => navigation.navigate('home')}
              viewStyle={{ backgroundColor: colors.PURPLE_BASE }}
              textStyle={{ color: colors.WHITE }}
            />
          </View>

          <ServiceModal
            data={serviceForm}
            visible={isServiceModalVisible}
            onCloseModal={() => setIsServiceModalVisible(false)}
            onChange={setServiceForm}
            onSave={handleSaveService}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}