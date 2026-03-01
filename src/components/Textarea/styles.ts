import { StyleSheet } from 'react-native'

import { colors } from '@/themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY_100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    height: 120
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_700,
    marginHorizontal: 16,
    marginVertical: 12
  }
})