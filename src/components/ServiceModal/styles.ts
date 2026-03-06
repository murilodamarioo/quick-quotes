import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  container: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_200,
  },
  title: {
    flex: 1,
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    color: colors.GRAY_700
  },
  content: {
    padding: 20,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_200,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    padding: 20
  }
})