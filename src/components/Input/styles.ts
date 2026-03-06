import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.GRAY_100,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_700,
    marginVertical: 12,
    marginRight: 16
  },
  icon: {
    marginLeft: 16
  },
  withIcon: {
    marginLeft: 8,
  },
  noIcon: {
    marginLeft: 16
  }
})