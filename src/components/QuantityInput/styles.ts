import { colors } from '@/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: colors.GRAY_100,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  input: {
    minWidth: 24,
    textAlign: 'center'
  }
})