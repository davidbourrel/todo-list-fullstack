import Logo from '@/components/elements/Logo';
import ThemeSwitcher from '@/components/elements/ThemeSwitcher';

const Header = () => {
  return (
    <header className='flex justify-center w-full bg-neutral-900'>
      <div className='flex items-center justify-between w-full max-w-screen-lg app-padding'>
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
