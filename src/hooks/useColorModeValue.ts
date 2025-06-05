import { useTheme } from "next-themes";

export function useColorModeValue<T>(lightValue: T, darkValue: T): T {
  const { theme } = useTheme();
  return theme === "light" ? lightValue : darkValue;
}
