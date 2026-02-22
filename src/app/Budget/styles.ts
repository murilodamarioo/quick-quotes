import { StyleSheet } from 'react-native'

import { colors } from '@/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_200
  },
  content: {
    paddingHorizontal: 20,
    gap: 20,
    marginBottom: 20
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
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY_200
  }
})