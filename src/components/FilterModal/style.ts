import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

export const styles = StyleSheet.create({
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
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)', // Semitransparente, ajuste o alpha conforme desejar
  },
  header: {
    flexDirection: 'row',
    gap: 16,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_200,
  },
  title: {
    flex: 1,
    fontFamily: fontFamily.bold,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_700
  },
  content: {
    gap: 16,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_200,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_500
  },
  filter: {
    gap: 16
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filters: {
    gap: 12
  }
})