import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  title: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.bold,
    lineHeight: 14 * 1.4,
    fontSize: 14
  }
})