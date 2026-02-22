import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 64,
    gap: 24,
    backgroundColor: colors.WHITE,
    paddingBottom: 56
  },
  header: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16
  },
  headerTitle: {
    flexDirection: 'column',
    gap: 2
  },
  title: {
    fontFamily: fontFamily.bold,
    color: colors.PURPULE_BASE,
    lineHeight: 14 * 1.4,
    fontSize: 18
  },
  drawInfo: {
    fontFamily: fontFamily.regular,
    lineHeight: 14 * 1.4,
    fontSize: 14,
    color: colors.GRAY_500
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }
})