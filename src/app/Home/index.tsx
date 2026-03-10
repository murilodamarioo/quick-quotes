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


export function Home({ navigation }: StackRoutesProps<'home'>) {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<TagStatus[]>([])
  const [ordering, setOrdering] = useState<Ordering>(Ordering.RECENT)
  const [budgets, setBudgets] = useState<BudgetStorage[]>([])

  function closeModal() {
    setIsFilterVisible(false)
    resetFilters()
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
    setOrdering(Ordering.RECENT)
  }

  async function fetchData() {
    const response = await budgetsStorage.get()

    setBudgets(response)
  }

  function fetchDataWithFilter() {

  }

  useEffect(() => {
    fetchData()
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
        renderItem={({ item }) => (
          <Card
            title={item.title}
            client={item.client}
            status={item.status}
            price={item.services.reduce((acc, item) => acc + item.price, 0)}
            onPress={() => navigation.navigate('details', { id: item.id })}
          />
        )}
      />
      <FilterModal
        visible={isFilterVisible}
        selectedStatus={selectedStatus}
        ordering={ordering}
        setOrdering={setOrdering}
        toggleStatus={toggleStatus}
        onCloseModal={() => closeModal()}
        onResetFilters={resetFilters}
        onApplyFilters={fetchDataWithFilter}
      />
    </View>
  )
}