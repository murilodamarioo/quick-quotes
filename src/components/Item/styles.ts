import { colors, fontFamily } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.GRAY_700,
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 14 * 1.4
  },
  description: {
    color: colors.GRAY_500,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 14 * 1.4
  },
  quantity: {
    alignSelf: 'flex-end',
    color: colors.GRAY_600,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 14 * 1.4
  },
  editButton: {
    justifyContent: 'center'
  }
})