import { Modal, ModalProps, Pressable, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

import { Input } from '../Input'
import { Button } from '../Button'
import { Textarea } from '../Textarea'
import { CurrencyInput } from '../CurrencyInput'
import { QuantityInput } from '../QuantityInput'

import { colors } from '@/themes'

export type ServiceProps = {
  id?: string
  title: string
  description: string
  price: number
  quantity: number
}

type Props = ModalProps & {
  data: ServiceProps
  onCloseModal: () => void
  onChange: (data: ServiceProps) => void
  onSave: () => void
  onDelete: () => void
}

export function ServiceModal({
  data,
  visible = false,
  onCloseModal,
  onChange,
  onSave,
  onDelete,
  ...rest
}: Props) {


  function handleChange(field: keyof ServiceProps, value: string | number) {
    onChange({ ...data, [field]: value })
  }

  return (
    <Modal visible={visible} transparent animationType='slide' onRequestClose={onCloseModal} {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Serviço</Text>
            <Pressable onPress={onCloseModal}>
              <MaterialIcons name='close' size={24} color={colors.GRAY_600} />
            </Pressable>
          </View>

          <View style={styles.content}>
            <Input
              placeholder="Título"
              value={data.title}
              onChangeText={(value) => handleChange('title', value)}
            />
            <Textarea
              placeholder="Descrição"
              value={data.description}
              onChangeText={(value) => handleChange('description', value)}
            />
            <View style={styles.priceContainer}>
              <CurrencyInput
                value={data.price}
                onChangeValue={(value) => handleChange('price', value ?? 0)}
              />
              <QuantityInput
                value={String(data.quantity)}
                onChangeText={(value) => handleChange('quantity', value ?? 0)}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              name='delete'
              onPress={onDelete}
              viewStyle={{ backgroundColor: colors.GRAY_100, borderWidth: 1, borderColor: colors.GRAY_300 }}
              textStyle={{ color: colors.DANGER_BASE }}
            />
            <Button
              name='check'
              title='Salvar'
              onPress={onSave}
              textStyle={{ color: colors.WHITE }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}