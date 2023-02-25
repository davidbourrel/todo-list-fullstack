import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ThemeEnum } from '@/_types/theme';
import Button from '../Button';
import MoonIcon from '@/components/images/icons/MoonIcon';
import SunIcon from '@/components/images/icons/SunIcon';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleDarkModeChange = () => {
    setTheme(
      theme === ThemeEnum.Dark || resolvedTheme === ThemeEnum.Dark
        ? ThemeEnum.Light
        : ThemeEnum.Dark
    );
  };

  const themeIcon =
    theme === ThemeEnum.Dark || resolvedTheme === ThemeEnum.Dark ? (
      <SunIcon />
    ) : (
      <MoonIcon />
    );

  return (
    <Button
      headless
      onClick={handleDarkModeChange}
      className='bg-neutral-700 border border-neutral-500 rounded-full h-8 w-8 flex-shrink-0'
    >
      {themeIcon}
    </Button>
  );
};
export default ThemeSwitcher;
