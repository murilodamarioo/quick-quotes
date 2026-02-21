import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16
  },
  label: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.bold,
    lineHeight: 14 * 1.4,
    fontSize: 14,
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    alignItems: 'center'
  },
  quantity: {
    color: colors.GRAY_600,
    fontFamily: fontFamily.bold,
    lineHeight: 14 * 1.4,
    fontSize: 12,
  },
  discount: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 16
  },
  discountItems: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8
  },
  discountValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minus: {
    color: colors.DANGER_BASE,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  labelTotal: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.bold,
    lineHeight: 14 * 1.4,
    fontSize: 14
  }
})