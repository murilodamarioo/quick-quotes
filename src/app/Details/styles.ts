import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  info: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    borderRadius: 8,
    backgroundColor: colors.GRAY_100
  },
  headerInfo: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.GRAY_200
  },
  titleInfo: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.bold,
    fontSize: 18,
    lineHeight: 14 * 1.4,
    maxWidth: 266
  },
  bgIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.PURPULE_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  infoContent: {
    padding: 16,
    gap: 12
  },
  infoBox: {
    flex: 1,
    gap: 4
  },
  infoBoxTitle: {
    color: colors.GRAY_600,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 14 * 1.4
  },
  infoBoxContent: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 14 * 1.4
  },
  services: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    borderRadius: 8,
  },
  servicesHeader: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: colors.GRAY_200,
    alignItems: 'center'
  },
  servicesTitle: {
    color: colors.GRAY_500,
    fontFamily: fontFamily.bold,
    fontSize: 12,
    lineHeight: 14 * 1.4
  },
  servicesContent: {
    gap: 20,
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  serviceContentTitle: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 14 * 1.4
  },
  serviceContentDesc: {
    color: colors.GRAY_500,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 14 * 1.4
  },
  serviceContentQuantity: {
    color: colors.GRAY_600,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 14 * 1.4,
    alignSelf: 'flex-end'
  },
  price: {
    flexDirection: 'row',
    gap: 16,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    borderRadius: 8,
    backgroundColor: colors.GRAY_100,
    padding: 20
  },
  priceBox: {
    flex: 1,
    gap: 8
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8
  },
  subtotalText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_600,
  },
  subtotalValue: {
    color: colors.GRAY_600,
    fontFamily: fontFamily.bold,
    fontSize: 12,
    lineHeight: 14 * 1.4,
    textDecorationLine: 'line-through'
  },
  discount: {
    flexDirection: 'row',
  },
  discountBox: {
    flexDirection: 'row',
    gap: 8,
    flex: 1
  },
  discountText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_600
  },
  discountTag: {
    color: colors.SUCCESS_DARK,
    fontFamily: fontFamily.bold,
    fontSize: 12,
    lineHeight: 14 * 1.4,
    backgroundColor: colors.SUCCESS_LIGHT,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6
  },
  discountValue: {
    color: colors.SUCCESS_DARK,
    lineHeight: 14 * 1.4,
    fontFamily: fontFamily.bold,
    fontSize: 12
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  totalText: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 14 * 1.4
  },
  footer: {
    borderTopWidth: 1,
    borderColor: colors.GRAY_200,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})