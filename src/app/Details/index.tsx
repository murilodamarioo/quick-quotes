import { useEffect, useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, ScrollView, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { CurrencyValue } from '@/components/CurrencyValue'


import { colors } from '@/themes'

import { budgetsStorage, BudgetStorage } from '@/storage/budgetsStorage'

import { calculateDiscount } from '@/utils/discount-utils'

export function Details({ navigation, route }: StackRoutesProps<'details'>) {
  const budgetId = route.params?.id!

  const [budget, setBudget] = useState<BudgetStorage | null>(null)

  function handleRemoveBudget() {
    Alert.alert('Atenção', 'Deseja realmente remover esse orçamento?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: removeBudget }
    ])
  }

  async function removeBudget() {
    const bugets = await budgetsStorage.get()

    const updatedBugets = bugets.filter(budget => budget.id !== budgetId)

    await budgetsStorage.save(updatedBugets)
    navigation.navigate('home')
  }

  async function handleDuplicateBudget() {
    if (!budgetId) return

    const budget = await budgetsStorage.getById(budgetId)

    if (!budget) return

    const duplicated = {
      ...budget,
      id: Math.random().toString(36).slice(2),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await budgetsStorage.add(duplicated)

    navigation.navigate('home')
  }

  async function loadBudgetDetails() {
    if (!budgetId) {
      navigation.navigate('home')
      return
    }

    const data = await budgetsStorage.getById(budgetId)

    if (data) {
      setBudget(data)
    } else {
      Alert.alert('Erro', 'Orçamento não encontrado.')
      navigation.navigate('home')
    }
  }

  const totals = useMemo(() => {
    if (!budget) return { subtotal: 0, discountValue: 0, total: 0 }

    const subtotal = budget.services.reduce(
      (acc, s) => acc + s.price * s.quantity,
      0
    )

    const { discountValue, total } = calculateDiscount(subtotal, budget.discountPct)

    return { subtotal, discountValue, total }
  }, [budget])

  useEffect(() => {
    loadBudgetDetails()
  }, [budgetId])

  if (!budget) return

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <PageHeader
            title={budget.id}
            tagStatus={budget.status}
            onPress={() => navigation.goBack()}
          />

          <View style={styles.content}>
            <View style={styles.info}>
              <View style={styles.headerInfo}>
                <View style={styles.bgIcon}>
                  <MaterialIcons name='storefront' size={20} color={colors.PURPLE_BASE} />
                </View>
                <Text style={styles.titleInfo}>{budget.title}</Text>
              </View>
              <View style={styles.infoContent}>
                <View style={styles.infoBox}>
                  <Text style={styles.infoBoxTitle}>Cliente</Text>
                  <Text style={styles.infoBoxContent}>{budget.client}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoBoxTitle}>Criado em</Text>
                    <Text style={styles.infoBoxContent}>{String(budget.createdAt)}</Text>
                  </View>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoBoxTitle}>Atualizado em</Text>
                    <Text style={styles.infoBoxContent}>{String(budget.updatedAt)}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.services}>
              <View style={styles.servicesHeader}>
                <MaterialIcons name='article' size={16} color={colors.PURPLE_BASE} />
                <Text style={styles.servicesTitle}>Serviços inclusos</Text>
              </View>
              <View style={styles.servicesContent}>
                {
                  budget.services.map(service => (
                    <View key={service.id} style={{ gap: 16, flexDirection: 'row' }}>
                      <View style={{ gap: 2, flex: 1 }}>
                        <Text style={styles.serviceContentTitle}>{service.title}</Text>
                        <Text style={styles.serviceContentDesc}>{service.description}</Text>
                      </View>
                      <View style={{ gap: 2, justifyContent: 'center' }}>
                        <CurrencyValue value={service.price} size='large' strong />
                        <Text style={styles.serviceContentQuantity}>Qt: {service.quantity}</Text>
                      </View>
                    </View>
                  ))
                }
              </View>
            </View>

            <View style={styles.price}>
              <View style={styles.bgIcon}>
                <MaterialIcons name='credit-card' size={20} color={colors.PURPLE_BASE} />
              </View>
              <View style={styles.priceBox}>
                <View style={{ gap: 2 }}>
                  <View style={styles.subtotal}>
                    <Text style={styles.subtotalText}>Subtotal</Text>
                    <Text style={styles.subtotalValue}>R$ {totals.subtotal}</Text>
                  </View>
                  <View style={styles.discount}>
                    <View style={styles.discountBox}>
                      <Text style={styles.discountText}>Desconto</Text>
                      <Text style={styles.discountTag}>{budget.discountPct}% off</Text>
                    </View>
                    <Text style={styles.discountValue}>
                      - R$ {totals.discountValue}
                    </Text>
                  </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: colors.GRAY_200 }}></View>
                <View style={styles.total}>
                  <Text style={styles.totalText}>Investimento toal</Text>
                  <CurrencyValue value={totals.total} size='large' strong />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button
            name='delete'
            viewStyle={{ backgroundColor: colors.GRAY_100, borderWidth: 1, borderColor: colors.GRAY_300 }}
            textStyle={{ color: colors.DANGER_BASE }}
            onPress={handleRemoveBudget}
          />
          <Button
            name='content-copy'
            viewStyle={{ backgroundColor: colors.GRAY_100, borderWidth: 1, borderColor: colors.GRAY_300 }}
            textStyle={{ color: colors.PURPLE_BASE }}
            onPress={handleDuplicateBudget}
          />
          <Button
            name='edit'
            viewStyle={{ backgroundColor: colors.GRAY_100, borderWidth: 1, borderColor: colors.GRAY_300 }}
            textStyle={{ color: colors.PURPLE_BASE }}
            onPress={() => navigation.navigate('budget', { id: budgetId })}
          />
        </View>
        <Button
          name='share'
          title='Compartilhar'
          textStyle={{ color: colors.WHITE }}
        />
      </View>
    </SafeAreaView>
  )
}