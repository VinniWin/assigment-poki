"use client";

import { IconButton } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ColorModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <IconButton
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      position="fixed"
      top={4}
      right={4}
      zIndex={1000}
      size="md"
      variant={"outline"}
    >
      {theme === "dark" ? (
        <Moon suppressHydrationWarning />
      ) : (
        <Sun suppressHydrationWarning />
      )}
    </IconButton>
  );
};

export default ColorModeToggle;
