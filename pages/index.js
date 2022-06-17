import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Animation from '../components/home/animation';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>필리스튜디오 포트폴리오</title>
        <meta name='description' content='코딩 작업물' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='flex min-h-screen flex-col items-center justify-center text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <Hero />

          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <Animation />
          </div>
        </div>
      </section>
    </Layout>
  );
}
