import Link from '../Link';

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex text-white text-xl font-bold font-mono select-none'
      aria-label='MyTODO Logo'
    >
      <span>MyTODO</span>
    </Link>
  );
};
export default Logo;
