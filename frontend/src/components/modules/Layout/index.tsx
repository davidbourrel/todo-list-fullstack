import { PropsWithChildren } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className='flex-1 app-padding w-full max-w-screen-lg'>
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
