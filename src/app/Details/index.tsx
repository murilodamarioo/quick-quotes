import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

import { StackRoutesProps } from '@/routes/StackRoutes'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { CurrencyValue } from '@/components/CurrencyValue'

import { TagStatus } from '@/types/TagStatus'

import { colors } from '@/themes'

export function Details({ navigation, route }: StackRoutesProps<'details'>) {

  return (
    <SafeAreaView style={{ backgroundColor: colors.WHITE }}>
      <ScrollView>
        <View style={styles.container}>
          <PageHeader
            title='Orçamento #12345'
            tagStatus={TagStatus.DRAW}
            onPress={() => navigation.goBack()}
          />

          <View style={styles.content}>
            <View style={styles.info}>
              <View style={styles.headerInfo}>
                <View style={styles.bgIcon}>
                  <MaterialIcons name='storefront' size={20} color={colors.PURPLE_BASE} />
                </View>
                <Text style={styles.titleInfo}>Desenvolvimento de aplicativo de loja online</Text>
              </View>
              <View style={styles.infoContent}>
                <View style={styles.infoBox}>
                  <Text style={styles.infoBoxTitle}>Cliente</Text>
                  <Text style={styles.infoBoxContent}>Soluções Tecnológicas Beta</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoBoxTitle}>Criado em</Text>
                    <Text style={styles.infoBoxContent}>22/08/2026</Text>
                  </View>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoBoxTitle}>Atualizado em</Text>
                    <Text style={styles.infoBoxContent}>25/08/2026</Text>
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
                <View style={{ gap: 16, flexDirection: 'row' }}>
                  <View style={{ gap: 2, flex: 1 }}>
                    <Text style={styles.serviceContentTitle}>Design de interfaces</Text>
                    <Text style={styles.serviceContentDesc}>Criação de wireframes e protótipos de alta fidelidade</Text>
                  </View>
                  <View style={{ gap: 2, justifyContent: 'center' }}>
                    <CurrencyValue value={3850.50} size='large' strong />
                    <Text style={styles.serviceContentQuantity}>Qt: 1</Text>
                  </View>
                </View>
                <View style={{ gap: 16, flexDirection: 'row' }}>
                  <View style={{ gap: 2, flex: 1 }}>
                    <Text style={styles.serviceContentTitle}>Design de interfaces</Text>
                    <Text style={styles.serviceContentDesc}>Criação de wireframes e protótipos de alta fidelidade</Text>
                  </View>
                  <View style={{ gap: 2, justifyContent: 'center' }}>
                    <CurrencyValue value={3850.50} size='large' strong />
                    <Text style={styles.serviceContentQuantity}>Qt: 1</Text>
                  </View>
                </View>
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
                    <Text style={styles.subtotalValue}>R$ 4.050,00</Text>
                  </View>
                  <View style={styles.discount}>
                    <View style={styles.discountBox}>
                      <Text style={styles.discountText}>Desconto</Text>
                      <Text style={styles.discountTag}>5% off</Text>
                    </View>
                    <Text style={styles.discountValue}>
                      - R$ 200,00
                    </Text>
                  </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: colors.GRAY_200 }}></View>
                <View style={styles.total}>
                  <Text style={styles.totalText}>Investimento toal</Text>
                  <CurrencyValue value={3850.50} size='large' strong />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Button
                name='delete'
                viewStyle={{ backgroundColor: colors.GRAY_100, borderWidth: 1, borderColor: colors.GRAY_300 }}
                textStyle={{ color: colors.DANGER_BASE }}
              />
              <Button
                name='content-copy'
                viewStyle={{ backgroundColor: colors.GRAY_100, borderWidth: 1, borderColor: colors.GRAY_300 }}
                textStyle={{ color: colors.PURPLE_BASE }}
              />
              <Button
                name='edit'
                viewStyle={{ backgroundColor: colors.GRAY_100, borderWidth: 1, borderColor: colors.GRAY_300 }}
                textStyle={{ color: colors.PURPLE_BASE }}
              />
            </View>
            <Button
              name='share'
              title='Compartilhar'
              textStyle={{ color: colors.WHITE }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}