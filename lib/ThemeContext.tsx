'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme) {
        setTheme(savedTheme);
        // Apply theme immediately to prevent flash
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else if (prefersDark) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    } finally {
      setMounted(true);
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      try {
        const root = document.documentElement;

        if (theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
      } catch (error) {
        console.error('Error saving theme:', error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  // Return a safe default during SSR or if provider is not available
  if (context === undefined) {
    // Return a safe default for both SSR and hydration
    // This prevents errors during initial render/hydration
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {},
      mounted: false,
    };
  }
  return context;
}
