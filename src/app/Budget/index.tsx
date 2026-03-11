import { useEffect, useState } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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

import { budgetsStorage, BudgetStorage } from '@/storage/budgetsStorage'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { TagStatus } from '@/types/TagStatus'
import { colors } from '@/themes'


export function Budget({ navigation, route }: StackRoutesProps<'budget'>) {
  const budgetId = route.params?.id

  const [title, setTitle] = useState('')
  const [client, setClient] = useState('')
  const [tagType, setTagType] = useState(TagStatus.DRAW)
  const [services, setServices] = useState<ServiceProps[]>([])
  const [discountPct, setDiscountPct] = useState(0)
  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false)

  const subtotal = services.map(service => service.price).reduce((acc, item) => {
    return acc + item
  }, 0)

  const totalQuantity = services.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const investmentData = {
    subtotal,
    quantity: totalQuantity,
    discountPct
  }

  const initialFormValue = {
    title: '',
    description: '',
    price: 0,
    quantity: 1,
  }

  const [dataService, setDataService] = useState<ServiceProps>(initialFormValue)

  function addNewService() {
    setDataService(initialFormValue)
    setIsServiceModalVisible(true)
  }

  function updateService(service: ServiceProps) {
    setIsServiceModalVisible(true)
    setDataService(service)
  }

  function handleSaveService() {
    if (!dataService.title.trim()) {
      return Alert.alert('Atenção', 'O título do serviço é obrigatório.')
    }

    setServices(prev => {
      const isEditing = prev.some(service => service.id === dataService.id)

      if (isEditing) {
        return prev.map(service => service.id === dataService.id ? dataService : service)
      }

      const newService = { id: Math.random().toString(36).slice(2), ...dataService }

      setIsServiceModalVisible(false)

      return [...prev, newService]
    })
  }

  function handleRemoveService() {
    Alert.alert('Atenção', 'Deseja realmente remover esse serviço?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: removeService }
    ])
  }

  function removeService() {
    const updatedServices = services.filter(service => service.id !== dataService.id)
    setServices(updatedServices)

    setIsServiceModalVisible(false)
  }

  async function handleSaveBudget() {
    if (!title.trim()) {
      return Alert.alert('Atenção', 'O título é obrigatório.')
    }

    if (!client.trim()) {
      return Alert.alert('Atenão', 'O nome do cliente é obrigatório.')
    }

    budgetId ? await updateBudget() : await createBudget()

    navigation.navigate('home')
  }

  async function createBudget() {
    const newBudget: BudgetStorage = {
      id: Math.random().toString(36).slice(2),
      title,
      client,
      status: tagType,
      discountPct,
      createdAt: new Date(),
      updatedAt: new Date(),
      services
    }

    await budgetsStorage.add(newBudget)
  }

  async function updateBudget() {
    const budgets = await budgetsStorage.get()

    const updatedBudgets = budgets.map(budget =>
      budget.id === budgetId
        ? {
          ...budget,
          title,
          client,
          status: tagType,
          discountPct,
          updatedAt: new Date(),
          services
        }
        : budget
    )

    await budgetsStorage.save(updatedBudgets)
  }

  async function loadBudgetData() {
    if (!budgetId) {
      setTitle('')
      setClient('')
      setTagType(TagStatus.DRAW)
      setDiscountPct(0)
      setServices([])

      return
    }

    try {
      const budget = await budgetsStorage.getById(budgetId)

      if (budget) {
        setTitle(budget.title)
        setClient(budget.client)
        setTagType(budget.status)
        setDiscountPct(budget.discountPct) // Note: Corrigi de discountPct para budget.discountPct
        setServices(budget.services)
      } else {
        Alert.alert('Erro', 'Orçamento não encontrado.')
        navigation.navigate('home')
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados.')
      console.error(error)
    }
  }

  useEffect(() => {
    loadBudgetData()
  }, [budgetId])


  return (
    <SafeAreaView style={{ backgroundColor: colors.WHITE }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <PageHeader
            title='Orçamento'
            onPress={() => navigation.goBack()}
          />

          <View style={styles.content}>
            <BudgetContent icon='home' title='Informações gerais'>
              <View style={styles.form}>
                <Input
                  placeholder='Título'
                  value={title}
                  onChangeText={setTitle}
                />
                <Input
                  placeholder='Cliente'
                  value={client}
                  onChangeText={setClient}
                />
              </View>
            </BudgetContent>


            <BudgetContent icon='tag' title='Status'>
              <TagOption selected={tagType} onChange={setTagType} />
            </BudgetContent>

            <BudgetContent style={{ paddingHorizontal: 20 }} icon='file-text' title='Serviços inclusos'>
              <View style={styles.items}>
                {services.map((service) => (
                  <Item
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    quantity={service.quantity}
                    price={service.price}
                    onPress={() => updateService(service)}
                  />
                ))}
                <Button
                  name='add'
                  title='Adicionar serviço'
                  onPress={addNewService}
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
                onDiscountChange={setDiscountPct}
                data={investmentData}
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
              onPress={handleSaveBudget}
              viewStyle={{ backgroundColor: colors.PURPLE_BASE }}
              textStyle={{ color: colors.WHITE }}
            />
          </View>

          <ServiceModal
            data={dataService}
            visible={isServiceModalVisible}
            onCloseModal={() => setIsServiceModalVisible(false)}
            onChange={setDataService}
            onSave={handleSaveService}
            onDelete={handleRemoveService}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}