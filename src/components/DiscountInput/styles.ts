import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.GRAY_100,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    paddingHorizontal: 16,
    height: 32,
    width: 75
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 14 * 1.4,
    fontFamily: fontFamily.regular,
    color: colors.GRAY_700,
  },
  percentage: {
    color: colors.GRAY_600,
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 14 * 1.4,
  }
})