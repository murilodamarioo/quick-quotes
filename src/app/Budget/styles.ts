import { StyleSheet } from 'react-native'

import { colors } from '@/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  form: {
    gap: 12
  },
  items: {
    gap: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY_200
  }
})