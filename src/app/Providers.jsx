"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen text-gray-700 transition-colors duration-300 select-none  dark:text-gray-200 dark:bg-gray-700">
        {children}
      </div>
    </ThemeProvider>
  );
}
