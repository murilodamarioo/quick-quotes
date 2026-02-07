import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/themes'

import { TagStatus } from '@/types/TagStatus'

export const getTagConfig = (status: TagStatus) => {
  switch (status) {
    case TagStatus.DRAW:
      return {
        text: 'Rascunho',
        containerStyle: styles.containerDraw,
        textStyle: styles.textDraw,
        dotStyle: styles.dotDraw
      }
    case TagStatus.SENT:
      return {
        text: 'Enviado',
        containerStyle: styles.containerSent,
        textStyle: styles.textSent,
        dotStyle: styles.dotSent
      }
    case TagStatus.APPROVED:
      return {
        text: 'Aprovado',
        containerStyle: styles.containerApproved,
        textStyle: styles.textApproved,
        dotStyle: styles.dotApproved
      }
    case TagStatus.REJECTED:
      return {
        text: 'Recusado',
        containerStyle: styles.containerRejected,
        textStyle: styles.textRejected,
        dotStyle: styles.dotRejected
      }
    default:
      return {
        text: status,
        containerStyle: styles.containerDefault,
        textStyle: styles.textDefault,
        dotStyle: styles.dotDefault
      }
  }
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start'
  },

  title: {
    fontFamily: fontFamily.bold,
    fontSize: 12,
    lineHeight: 14 * 1.4,
  },

  containerDraw: {
    backgroundColor: colors.GRAY_300,
  },
  textDraw: {
    color: colors.GRAY_500
  },
  dotDraw: {
    color: colors.GRAY_400,
    fontSize: 12
  },

  containerSent: {
    backgroundColor: colors.INFO_LIGHT,
  },
  textSent: {
    color: colors.INFO_DARK,
  },
  dotSent: {
    color: colors.INFO_BASE,
    fontSize: 12
  },

  containerApproved: {
    backgroundColor: colors.SUCCESS_LIGHT
  },
  textApproved: {
    color: colors.SUCCESS_DARK,
  },
  dotApproved: {
    color: colors.SUCCESS_BASE,
    fontSize: 12
  },

  containerRejected: {
    backgroundColor: colors.DANGER_LIGHT
  },
  textRejected: {
    color: colors.DANGER_DARK
  },
  dotRejected: {
    color: colors.DANGER_BASE,
    fontSize: 12
  },

  containerDefault: {
    backgroundColor: colors.GRAY_300,
  },
  textDefault: {
    color: colors.GRAY_500,
  },
  dotDefault: {
    color: colors.GRAY_400,
    fontSize: 12
  },
})