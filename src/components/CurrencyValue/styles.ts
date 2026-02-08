import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

export const styles = StyleSheet.create({
  currency: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 14 * 1.4
  },
  currencyValue: {
    color: colors.GRAY_700,
  },
  valueRegular: {
    fontFamily: "Lato_400Regular",
  },
  valueStrong: {
    fontFamily: "Lato_700Bold",
  },
  small: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  medium: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  large: {
    fontSize: 20,
    lineHeight: 28,
  },
})