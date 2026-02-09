import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.PURPULE_BASE,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 999
  },
  icon: {
    color: colors.WHITE
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 14 * 1.4, // 140%
    color: colors.WHITE,
    paddingRight: 8
  }
})