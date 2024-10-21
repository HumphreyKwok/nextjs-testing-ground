"use client";

import { ThemeProvider } from "next-themes";

const DarkModeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="black" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default DarkModeProvider;
