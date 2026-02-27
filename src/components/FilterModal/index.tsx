import { Modal, ModalProps, Pressable, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './style'

import { Button } from '../Button'
import { StatusFilterCheckbox } from '../StatusFilterCheckbox'

import { TagStatus } from '@/types/TagStatus'
import { colors } from '@/themes'

type Props = ModalProps & {
  visible: boolean
  selectedStatus: TagStatus[]
  onCloseModal: () => void
  toggleStatus: (status: TagStatus) => void
  onResetFilters: () => void
}

export function FilterModal({
  visible,
  selectedStatus,
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
      {...rest}
    >
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
    </Modal>
  )
}