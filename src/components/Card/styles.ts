import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

export const styles = StyleSheet.create({
  card: {
    position: 'relative',
    flexDirection: 'row',
    gap: 12,

    backgroundColor: colors.GRAY_100,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontFamily: fontFamily.bold,
    color: colors.GRAY_700,
    fontSize: 16,
    lineHeight: 14 * 1.4
  },
  client: {
    fontFamily: fontFamily.regular,
    color: colors.GRAY_600,
    fontSize: 14,
    lineHeight: 14 * 1.4
  },
  priceContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
  },
});