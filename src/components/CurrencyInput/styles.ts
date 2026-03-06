import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: colors.GRAY_100,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    height: 48,
    alignItems: 'center'
  },
  label: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_600,
    marginLeft: 16
  },
  input: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.GRAY_700,
    lineHeight: 14 * 1.4,
    marginRight: 16
  }
})