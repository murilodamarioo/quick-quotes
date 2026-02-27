import { Modal, ModalProps, Pressable, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './style'

import { Button } from '../Button'
import { StatusFilterCheckbox } from '../StatusFilterCheckbox'
import { OrderingFilterRadio } from '../OrderingFilterRadio'

import { Ordering } from '@/types/Ordering'
import { TagStatus } from '@/types/TagStatus'
import { colors } from '@/themes'

type Props = ModalProps & {
  visible: boolean
  selectedStatus: TagStatus[]
  ordering: Ordering
  setOrdering: (ordering: Ordering) => void
  onCloseModal: () => void
  toggleStatus: (status: TagStatus) => void
  onResetFilters: () => void
}

export function FilterModal({
  visible,
  selectedStatus,
  ordering,
  setOrdering,
  onCloseModal,
  toggleStatus,
  onResetFilters,
  ...rest
}: Props) {

  const allStatuses = Object.values(TagStatus)

  return (
    <Modal
      visible={visible}
      onRequestClose={onCloseModal}
      animationType='slide'
      transparent
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Filtrar e ordenar</Text>
            <Pressable onPress={onCloseModal}>
              <MaterialIcons name='close' size={24} color={colors.GRAY_600} />
            </Pressable>
          </View>

          <View style={styles.content}>
            <View style={styles.filter}>
              <Text style={styles.subtitle}>Status</Text>
              {allStatuses.map(status => (
                <StatusFilterCheckbox
                  key={status}
                  checked={selectedStatus.includes(status)}
                  onToggle={() => toggleStatus(status)}
                  status={status}
                />
              ))}
            </View>
            <View style={styles.filter}>
              <Text style={styles.subtitle}>Ordenação</Text>
              <OrderingFilterRadio
                selected={ordering === Ordering.RECENT}
                onPress={() => setOrdering(Ordering.RECENT)}
                value='Mais recente'
              />
              <OrderingFilterRadio
                selected={ordering === Ordering.OLDEST}
                onPress={() => setOrdering(Ordering.OLDEST)}
                value='Mais antigo'
              />
              <OrderingFilterRadio
                selected={ordering === Ordering.HIGHEST_PRICE}
                onPress={() => setOrdering(Ordering.HIGHEST_PRICE)}
                value='Maior preço'
              />
              <OrderingFilterRadio
                selected={ordering === Ordering.LOWEST_PRICE}
                onPress={() => setOrdering(Ordering.LOWEST_PRICE)}
                value='Menor preço'
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              title='Resetar filtros'
              onPress={onResetFilters}
              viewStyle={{
                backgroundColor: colors.GRAY_100,
                borderWidth: 1,
                borderColor: colors.GRAY_300
              }}
              textStyle={{ color: colors.PURPLE_BASE }}
            />
            <Button
              title='Aplicar'
              name='check'
              onPress={() => {
                console.log('Aplicar filtros')
                onCloseModal()
              }}
              viewStyle={{ backgroundColor: colors.PURPLE_BASE }}
              textStyle={{ color: colors.WHITE }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}