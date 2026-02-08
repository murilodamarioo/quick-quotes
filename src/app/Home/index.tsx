import { Text, View, FlatList } from 'react-native'

import { styles } from './styles'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { FilterButton } from '@/components/FilterButton'
import { Tag } from '@/components/Tag'
import { TagStatus } from '@/types/TagStatus'
import { Card } from '@/components/Card'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.headerTitle}>
          <Text style={styles.title}>Orçamentos</Text>
          <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
        </View>

        <Button name='add' title='Novo' />
      </View>

      <View style={styles.search}>
        <Input
          icon='search'
          placeholder='Título ou cliente'
        />

        <FilterButton icon='tune' />
      </View>

      <Card
        title='Desenvolvimento de aplicativo de loja online'
        client='John Doe'
        status={TagStatus.SENT}
        price={100}
      />

      <Card
        title='Desenvolvimento de aplicativo de loja online'
        client='John Doe'
        status={TagStatus.APPROVED}
        price={100}
      />

      <Card
        title='Modelagem 3D da casa'
        client='John Doe'
        status={TagStatus.REJECTED}
        price={200.20}
      />

      <Card
        title='Modelagem 3D da casa'
        client='John Doe'
        status={TagStatus.DRAW}
        price={500}
      />
    </View>
  )
}