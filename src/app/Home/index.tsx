import { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'

import { styles } from './styles'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { FilterButton } from '@/components/FilterButton'
import { Card } from '@/components/Card'
import { FilterModal } from '@/components/FilterModal'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { TagStatus } from '@/types/TagStatus'
import { Ordering } from '@/types/Ordering'

import { colors } from '@/themes'

import { budgetsStorage, BudgetStorage } from '@/storage/budgetsStorage'

import { calculateDiscount } from '@/utils/discount-utils'


export function Home({ navigation }: StackRoutesProps<'home'>) {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<TagStatus[]>([])
  const [ordering, setOrdering] = useState<Ordering>()
  const [budgets, setBudgets] = useState<BudgetStorage[]>([])

  function closeModal() {
    setIsFilterVisible(false)
  }

  function toggleStatus(status: TagStatus) {
    setSelectedStatus(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    )
  }

  function resetFilters() {
    setSelectedStatus([])
    setOrdering(undefined)
  }

  async function fetchData() {
    const response = await budgetsStorage.get()

    setBudgets(response)
  }

  async function fetchDataWithFilter() {
    const response = await budgetsStorage.getFiltered(selectedStatus, ordering)

    setBudgets(response)
  }

  function handleApplyFilters() {
    selectedStatus.length > 0 || ordering
      ? fetchDataWithFilter()
      : fetchData()
  }

  useEffect(() => {
    fetchData()
    resetFilters()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Orçamentos</Text>
          <Text style={styles.drawInfo}>Você tem 1 item em rascunho</Text>
        </View>
        <Button
          name='add'
          title='Novo'
          onPress={() => navigation.navigate('budget')}
          viewStyle={{ backgroundColor: colors.PURPLE_BASE }}
          textStyle={{ color: colors.WHITE }}
        />
      </View>
      <View style={styles.search}>
        <View style={{ flex: 1 }}>
          <Input icon="search" placeholder="Título ou cliente" />
        </View>
        <FilterButton icon='tune' onPress={() => setIsFilterVisible(true)} />
      </View>
      <FlatList
        data={budgets}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => {
          const subtotal = item.services.reduce((acc, s) => acc + s.price * s.quantity, 0)
          const { total } = calculateDiscount(subtotal, item.discountPct)
          return (
            <Card
              title={item.title}
              client={item.client}
              status={item.status}
              price={total}
              onPress={() => navigation.navigate('details', { id: item.id })}
            />
          )
        }}
      />
      <FilterModal
        visible={isFilterVisible}
        selectedStatus={selectedStatus}
        ordering={ordering}
        setOrdering={setOrdering}
        toggleStatus={toggleStatus}
        onCloseModal={() => closeModal()}
        onResetFilters={resetFilters}
        onApplyFilters={handleApplyFilters}
      />
    </View>
  )
}