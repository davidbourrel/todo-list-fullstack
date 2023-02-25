import Head from 'next/head';
import ListTodo from '@/components/modules/ListTodo';
import AddTodo from '@/components/elements/AddTodo';

const Home = () => {
  return (
    <>
      <Head>
        <title>Todo list exercise</title>
        <meta name='description' content='Todo list exercise' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <h1 className='main-title'>THINGS TO DO:</h1>
        <AddTodo />
        <ListTodo />
      </>
    </>
  );
};
export default Home;
