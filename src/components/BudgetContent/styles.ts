import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  title: {
    fontFamily: fontFamily.regular,
    lineHeight: 14 * 1.4,
    fontSize: 12,
    color: colors.GRAY_500
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  }
})