import Head from 'next/head';
import Header from '@/components/Layout/Header';
import HomeContent from '@/components/Home/HomeContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clean Blog</title>
      </Head>
      <Header
        backgroundImage='home-bg.jpg'
        title='Clean Blog'
        subTitle='A Clean Blog Theme by Start Bootstrap'
      />
      <HomeContent />
    </>
  );
}
