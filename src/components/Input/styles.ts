import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.GRAY_100,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 14 * 1.4,
    color: colors.GRAY_500,
    paddingVertical: 16
  }
})