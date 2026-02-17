import { Text, View, FlatList } from 'react-native'

import { styles } from './styles'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { FilterButton } from '@/components/FilterButton'
import { Card } from '@/components/Card'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { TagStatus } from '@/types/TagStatus'
import { colors } from '@/themes'

const data = [
  {
    id: 1,
    title: 'Desenvolvimento de aplicativo de loja online',
    client: 'John Doe',
    status: TagStatus.SENT,
    price: 3500
  },
  {
    id: 2,
    title: 'Desenvolvimento de aplicativo de restaurante',
    client: 'John Doe',
    status: TagStatus.APPROVED,
    price: 1500
  },
  {
    id: 3,
    title: 'Desenvolvimento de aplicativo',
    client: 'John Doe',
    status: TagStatus.REJECTED,
    price: 2000
  },
  {
    id: 4,
    title: 'Desenvolvimento de aplicativo',
    client: 'John Doe',
    status: TagStatus.REJECTED,
    price: 2000
  },
  {
    id: 5,
    title: 'Desenvolvimento de aplicativo',
    client: 'John Doe',
    status: TagStatus.REJECTED,
    price: 2000
  },
  {
    id: 6,
    title: 'Desenvolvimento de aplicativo',
    client: 'John Doe',
    status: TagStatus.REJECTED,
    price: 2000
  },
  {
    id: 7,
    title: 'Desenvolvimento de aplicativo',
    client: 'John Doe',
    status: TagStatus.REJECTED,
    price: 2000
  },
  {
    id: 8,
    title: 'Desenvolvimento de aplicativo',
    client: 'John Doe',
    status: TagStatus.REJECTED,
    price: 2000
  },
  {
    id: 9,
    title: 'Desenvolvimento de aplicativo',
    client: 'John Doe',
    status: TagStatus.REJECTED,
    price: 2000
  },
]

export function Home({ navigation }: StackRoutesProps<'home'>) {
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
          onPress={() => navigation.navigate('new_budget')}
          viewStyle={{ backgroundColor: colors.PURPULE_BASE }}
          textStyle={{ color: colors.WHITE }}
        />
      </View>

      <View style={styles.search}>
        <View style={{ flex: 1 }}>
          <Input icon="search" placeholder="Título ou cliente" />
        </View>

        <FilterButton icon='tune' />
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            client={item.client}
            status={item.status}
            price={item.price}
          />
        )}
      />
    </View>
  )
}