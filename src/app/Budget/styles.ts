import { StyleSheet } from 'react-native'

import { colors } from '@/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  content: {
    paddingHorizontal: 20,
    gap: 20,
    marginBottom: 20
  },
  form: {
    gap: 12
  }
})