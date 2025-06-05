"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  // because of hydration error
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient)
    return (
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ChakraProvider>
    );
}
