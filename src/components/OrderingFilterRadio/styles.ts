import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  value: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_600
  }
})