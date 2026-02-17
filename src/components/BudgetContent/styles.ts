import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.GRAY_300,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: colors.GRAY_300,
    borderBottomWidth: 1
  },
  title: {
    fontFamily: fontFamily.regular,
    lineHeight: 14 * 1.4,
    fontSize: 12,
    color: colors.GRAY_500
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  }
})